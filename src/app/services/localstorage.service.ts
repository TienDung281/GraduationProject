import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  get(key: string) {
    return JSON.parse(localStorage.getItem(key) as any);
  }

  set(key: string, val: any) {
    return localStorage.setItem(key, JSON.stringify(val));
  }

  clear() {
    return localStorage.clear();
  }
}
