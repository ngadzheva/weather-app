import { Injectable } from '@angular/core';

import { EXPIRATION_TIME } from '../expiration-time';

@Injectable({
  providedIn: 'root'
})
export class CacheService {
  setItem(key: string, value: string) {
    const data = JSON.parse(value);
    const currentTime = new Date().getTime();
    const dataWithExpiration = {data, expiration: new Date(currentTime + EXPIRATION_TIME) };
  
    localStorage.setItem(key, JSON.stringify(dataWithExpiration));
  }

  getItem(key: string) {
    const cachedItem = JSON.parse(localStorage.getItem(key));
    const expired = cachedItem && new Date(Date.parse(cachedItem.expiration)) <= new Date();

    return !expired ? cachedItem : null;
  }

  removeItem(key: string) {
    localStorage.removeItem(key);
  }
}
