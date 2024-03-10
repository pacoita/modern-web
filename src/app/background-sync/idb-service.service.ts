import { Injectable } from '@angular/core';
import { IDBPDatabase, openDB } from 'idb';

@Injectable({
  providedIn: 'root'
})
export class IdbService {

  async openDB(dbName: string, version: number = 1) {
    try {
      return await openDB(dbName, version);
    } catch (error) {
      console.error('Error in opening database: ', error);
      return null;
    }
  }

  async createObjectStore(dbName: string, tableNames: string[], version: number = 1) {
    try {
      return await openDB(dbName, version, {
        upgrade(db: IDBPDatabase) {
          for (const tableName of tableNames) {
            if (!db.objectStoreNames.contains(tableName)) {
              db.createObjectStore(tableName, { autoIncrement: true, keyPath: 'id' });
            }
          }
        },
      });
    } catch (error) {
      console.error('Error in creating object store: ', error);
      return null;
    }
  }

  async fetch(db: IDBPDatabase, tableName: string, id: number) {
    const store = db.transaction(tableName, 'readonly').objectStore(tableName);
    return await store.get(id);
  }

  async insert(db: IDBPDatabase,tableName: string, value: object) {
    const store = db.transaction(tableName, 'readwrite').objectStore(tableName);
    return  await store.add(value);
  }
}
