
self.addEventListener('sync', (event) => {
  if (event.tag === 'syncFormData') {
    event.waitUntil(syncData());
  }
});

async function syncData() {
  const FORM_DB_NAME = 'BackSyncDb';
  const FORM_STORE_NAME = 'FormData';

  const openRequest = indexedDB.open(FORM_DB_NAME, 1);
  openRequest.onsuccess = function (event) {
    const db = event.target.result;

    if (db.objectStoreNames.contains(FORM_STORE_NAME)) {
      // Fetch all pending data from the local IndexedDB
      // In a real-world scenario, we would also need to store more details like target Url, etc.
      getPendingSubmitData(FORM_DB_NAME, FORM_STORE_NAME).then((documents) => {
        syncLocalData(documents);
      });
    }
  };
}

async function syncLocalData(formData) {
  // Send data to server
  const syncResponse = await fetch('http://localhost:3600/back-sync/form-data', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  if (syncResponse.status === 200) {
    return Promise.resolve('synced successfully');
  } else {
    return Promise.reject('sync failed: ' + syncResponse.status);
  }
}

function getPendingSubmitData(dbName, storeName) {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(dbName);

    request.onsuccess = (event) => {
      const db = event.target.result;
      const transaction = db.transaction(storeName, 'readonly');
      const objectStore = transaction.objectStore(storeName);

      const documents = [];
      let cursor = objectStore.openCursor();

      cursor.onsuccess = (event) => {
        const currentCursor = event.target.result;
        if (currentCursor) {
          documents.push(currentCursor.value);
          currentCursor.continue();
        } else {
          // Remove all pending data from local storage
          clearLocalData(db, storeName);

          // All documents fetched, resolve promise
          resolve(documents);
        }
      };

      transaction.onerror = (event) => {
        reject(Error(`Transaction error: ${event.target.error}`));
      };
    };

    request.onerror = (event) => {
      reject(Error(`Database error: ${event.target.error}`));
    };
  });
}


function clearLocalData(db, storeName) {
  const objectStore = db.transaction(storeName, 'readwrite').objectStore(storeName);
  const request = objectStore.clear();

  request.onerror = (err) => {
    console.error(`Error while deleting local pending data. Error: ${err}`);
  }
}
