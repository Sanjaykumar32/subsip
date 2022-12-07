/** Storage Helper */
export class StorageUtil {
  /**
   * Set item in localstorage
   * @param {string} key
   * @param {string} value
   */
  static setLocalStorage(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  /**
   * Get data from Local Storage
   * @param {string} key
   * @return {string}
   */
  static getLocalStorage(key: string): string | null {
    const data: string | null = localStorage.getItem(key);
    return data;
  }

  /**
   * Remove key-value from Local Storage
   * @param {string} key
   */
  static removeLocalStorage(key: string): void {
    localStorage.removeItem(key);
  }

  /**
   * Clear the whole local storage
   */
  static clearLocalStorage(): void {
    localStorage.clear();
  }

  /**
   * Clear the whole session storage
   */
  static clearSessionStorage(): void {
    sessionStorage.clear();
  }

  /**
   * Get Session Storage
   * @param {string} key
   * @return {void}
   */
  static getSessionSotrage(key: string): string {
    const receivedKey = sessionStorage.getItem(key);
    if (receivedKey == null) {
      return '';
    }

    return receivedKey;
  }

  /**
   * Set item in Session Storage
   * @param {string} key
   * @param {string} value
   * @return {void}
   */
  static setSessionStorage(key: string, value: string): void {
    sessionStorage.setItem(key, value);
  }
}
