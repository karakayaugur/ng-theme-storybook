// src/app/storage.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  // Save data
  /**
   * Stores a value in the browser's local storage under the specified key.
   * The value is serialized to a JSON string before storage.
   *
   * @param key - The key under which the value will be stored.
   * @param value - The value to be stored, which can be of any type.
   * @returns void
   * @throws Error if the value cannot be serialized to JSON.
   */
  setItem(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  // Retrieve data
  /**
   * Retrieves an item from local storage by its key and parses it as JSON.
   * @param key - The key of the item to retrieve from local storage.
   * @returns The parsed item if found; otherwise, null.
   * @throws SyntaxError if the stored data is not valid JSON.
   */
  getItem(key: string): any {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }

  // Remove data
  /**
   * Removes an item from local storage by its key.
   * @param key - The key of the item to be removed from local storage.
   * @returns void - This function does not return a value.
   * @throws None - This function does not throw exceptions.
   */
  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  // Clear all data
  /**
   * Clears all entries from the local storage.
   *
   * @returns {void} - This function does not return a value.
   * @throws {DOMException} - May throw an exception if the storage is not accessible.
   */
  clear(): void {
    localStorage.clear();
  }
}
