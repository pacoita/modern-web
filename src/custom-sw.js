(function () {
  'use strict';

  self.addEventListener('sync', (event) => {
    console.log('event.tag: ', event.tag);
    if (event.tag === 'syncFormData') {
      console.log('1 Syncing Data');
      event.waitUntil(syncData());
    }
  });

  async function syncData() {
    console.log('Syncing Data');

    // TODO: fetch from indexDb and pass the payload to the post
    const formData = { name: 'OFFLINE', age: '30', city: 'New York City' };

    const syncResponse = await fetch('http://localhost:3600/back-sync/post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (syncResponse.status === 200) {
      console.log('Data Synced');
      return Promise.resolve('synced successfully');
    } else {
      console.error('Data Sync Failed. Error Code: ' + syncResponse.status);
      return Promise.reject('sync failed');
    }

  }

}());