import { Injectable } from '@angular/core';

import { CACHE_EXPIRATION_TIME } from '../config/cache.config';

export interface CacheData {
  id: string;
  data: unknown;
  expiration: Date | string;
}

@Injectable({
  providedIn: 'root'
})
export class CacheService {
  /**
   * Stores items into browser's local storage with expiration date
   * @param key - the key with wich the data will be accessed from the local storage
   * @param value - the data which we will store
   */
  setItem(key: string, data: Pick<CacheData, 'id' | 'data'>) {
    const cachedData = this.getCachedData(key);

    const currentTime = new Date().getTime();
    const dataWithExpiration: CacheData = { ...data, expiration: new Date(currentTime + CACHE_EXPIRATION_TIME) };
    const existingDataId = cachedData.findIndex(existingData => existingData.id === data.id);

    if (existingDataId !== -1) {
      cachedData[existingDataId] = dataWithExpiration;
    } else {
      cachedData.push(dataWithExpiration);
    }
  
    localStorage.setItem(key, JSON.stringify(cachedData));
  }

  /**
   * Retrieves items from browser's local storage by given key and id
   * - If there is some data stored under the given key:
   *   - Checks whether the data is not expired and needs refresh
   * @param key - the key with which data will be searched in the local storage
   * @returns the cached data if it is not expired, otherwise, returns null
   */
  getItem(key: string, id: string): CacheData | undefined {
    const cachedData: CacheData[] = this.getItems(key);
    const cachedItem: CacheData | undefined = cachedData.find(data => data.id === id);

    return cachedItem;
  }

  /**
   * Removes item from local storage by key
   * @param key - the key with which the data we want to remove is stored in local storage
   */
  removeItem(key: string, id: string) {
    const cachedData = this.getCachedData(key);
    const updatedData = cachedData.filter(data => data.id !== id);
  
    localStorage.setItem(key, JSON.stringify(updatedData));
  }

  getItems(key: string): CacheData[] {
    const cachedData: CacheData[] = this.getCachedData(key);
    const notExpired = cachedData.filter(data => new Date(Date.parse(data.expiration as string)) >= new Date());

    return notExpired;
  }

  private getCachedData(key: string): CacheData[] {
    return JSON.parse(localStorage.getItem(key) ?? '[]');
  }
}
