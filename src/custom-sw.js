(function () {
  'use strict';

  self.addEventListener('sync', (event) => {
    if (event.tag === 'syncFormData') {
      event.waitUntil(syncData());
    }
  });

  async function syncData() {
    // TODO: fetch from indexDb and pass the payload to the post
    const formData = { name: 'OFFLINE', age: '30', city: 'New York City' };

    const syncResponse = await fetch('http://localhost:3000/back-sync/form-data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (syncResponse.status === 200) {
      return Promise.resolve('synced successfully');
    } else {
      return Promise.reject('sync failed: '+ syncResponse.status);
    }
  }
}());