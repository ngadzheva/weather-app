import { Injectable } from '@angular/core';

import { EXPIRATION_TIME } from '../expiration-time';

@Injectable({
  providedIn: 'root'
})
export class CacheService {
  /**
   * Stores items into browser's local storage with expiration date
   * @param key - the key with wich the data will be accessed from the local storage
   * @param value - the data which we will store
   */
  setItem(key: string, value: string) {
    const data = JSON.parse(value);
    const currentTime = new Date().getTime();
    const dataWithExpiration = {data, expiration: new Date(currentTime + EXPIRATION_TIME) };
  
    localStorage.setItem(key, JSON.stringify(dataWithExpiration));
  }

  /**
   * Retrieves items from browser's local storage by given key
   * - If there is some data stored under the given key:
   *   - Checks whether the data is not expired and needs refresh
   * @param key - the key with which data will be searched in the local storage
   * @returns the cached data if it is not expired, otherwise, returns null
   */
  getItem(key: string) {
    const cachedItem = JSON.parse(localStorage.getItem(key));
    const expired = cachedItem && new Date(Date.parse(cachedItem.expiration)) <= new Date();

    return !expired ? cachedItem : null;
  }

  /**
   * Removes item from local storage by key
   * @param key - the key with which the data we want to remove is stored in local storage
   */
  removeItem(key: string) {
    localStorage.removeItem(key);
  }
}
