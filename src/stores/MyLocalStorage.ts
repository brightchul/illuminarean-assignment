import { StateStorage } from "zustand/middleware";

class MyLocalStorage implements StateStorage {
  storage: Record<string, string> | Storage = {};

  getItem(name: string) {
    if (this.isLocalStorage()) return this.storage.getItem(name);
    return this.storage[name];
  }

  setItem(name: string, value: string) {
    if (this.isLocalStorage()) this.storage.setItem(name, value);
    else this.storage[name] = value;
  }

  removeItem(name: string) {
    if (this.isLocalStorage()) this.storage.removeItem(name);
    else delete this.storage[name];
  }

  hasItem(name: string) {
    return this.getItem(name) !== null && this.getItem(name) !== undefined;
  }

  isLocalStorage(): this is { storage: Storage } {
    return this.storage instanceof Storage;
  }

  sync() {
    if (typeof window !== "undefined") {
      this.storage = localStorage;
      return true;
    }
    return false;
  }
}

const myStorage = new MyLocalStorage();
export default myStorage;
