// Unit tests for: setItem

import { StorageService } from '../storage.service';

// client/src/app/shared/services/storage.service.spec.ts
describe('StorageService.setItem() setItem method', () => {
  let storageService: StorageService;

  beforeEach(() => {
    // Create a new instance of StorageService before each test
    storageService = new StorageService();

    // Clear localStorage before each test to ensure a clean slate
    localStorage.clear();
  });

  // Happy Path Tests
  describe('Happy Paths', () => {
    it('should store a string value in localStorage', () => {
      // Arrange
      const key = 'testKey';
      const value = 'testValue';

      // Act
      storageService.setItem(key, value);

      // Assert
      const storedValue = localStorage.getItem(key);
      expect(storedValue).toBe(JSON.stringify(value));
    });

    it('should store a number value in localStorage', () => {
      // Arrange
      const key = 'testKey';
      const value = 123;

      // Act
      storageService.setItem(key, value);

      // Assert
      const storedValue = localStorage.getItem(key);
      expect(storedValue).toBe(JSON.stringify(value));
    });

    it('should store a boolean value in localStorage', () => {
      // Arrange
      const key = 'testKey';
      const value = true;

      // Act
      storageService.setItem(key, value);

      // Assert
      const storedValue = localStorage.getItem(key);
      expect(storedValue).toBe(JSON.stringify(value));
    });

    it('should store an object in localStorage', () => {
      // Arrange
      const key = 'testKey';
      const value = { name: 'John', age: 30 };

      // Act
      storageService.setItem(key, value);

      // Assert
      const storedValue = localStorage.getItem(key);
      expect(storedValue).toBe(JSON.stringify(value));
    });

    it('should store an array in localStorage', () => {
      // Arrange
      const key = 'testKey';
      const value = [1, 2, 3, 4, 5];

      // Act
      storageService.setItem(key, value);

      // Assert
      const storedValue = localStorage.getItem(key);
      expect(storedValue).toBe(JSON.stringify(value));
    });
  });

  // Edge Case Tests
  describe('Edge Cases', () => {
    it('should overwrite an existing value in localStorage with the same key', () => {
      // Arrange
      const key = 'testKey';
      const initialValue = 'initialValue';
      const newValue = 'newValue';

      // Act
      storageService.setItem(key, initialValue);
      storageService.setItem(key, newValue);

      // Assert
      const storedValue = localStorage.getItem(key);
      expect(storedValue).toBe(JSON.stringify(newValue));
    });

    it('should handle null as a value and store it as "null" in localStorage', () => {
      // Arrange
      const key = 'testKey';
      const value = null;

      // Act
      storageService.setItem(key, value);

      // Assert
      const storedValue = localStorage.getItem(key);
      expect(storedValue).toBe(JSON.stringify(value));
    });

    it('should handle undefined as a value and store it as "undefined" in localStorage', () => {
      // Arrange
      const key = 'testKey';
      const value = undefined;

      // Act
      storageService.setItem(key, value);

      // Assert
      const storedValue = localStorage.getItem(key);
      expect(storedValue).toBe(JSON.stringify(value));
    });

    it('should handle an empty string as a key and store the value in localStorage', () => {
      // Arrange
      const key = '';
      const value = 'testValue';

      // Act
      storageService.setItem(key, value);

      // Assert
      const storedValue = localStorage.getItem(key);
      expect(storedValue).toBe(JSON.stringify(value));
    });

    it('should handle special characters in the key', () => {
      // Arrange
      const key = '!@#$%^&*()_+';
      const value = 'testValue';

      // Act
      storageService.setItem(key, value);

      // Assert
      const storedValue = localStorage.getItem(key);
      expect(storedValue).toBe(JSON.stringify(value));
    });

    it('should handle special characters in the value', () => {
      // Arrange
      const key = 'testKey';
      const value = '!@#$%^&*()_+';

      // Act
      storageService.setItem(key, value);

      // Assert
      const storedValue = localStorage.getItem(key);
      expect(storedValue).toBe(JSON.stringify(value));
    });

    it('should handle a very large object as a value', () => {
      // Arrange
      const key = 'testKey';
      const value = { data: 'x'.repeat(10 * 1024 * 1024) }; // 10MB string

      // Act
      storageService.setItem(key, value);

      // Assert
      const storedValue = localStorage.getItem(key);
      expect(storedValue).toBe(JSON.stringify(value));
    });
  });
});

// End of unit tests for: setItem
