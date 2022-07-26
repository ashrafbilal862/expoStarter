import AsyncStorage from '@react-native-async-storage/async-storage';

export default class LocalStorage {
  static setItem(key, value) {
    return AsyncStorage.setItem(key, value);
  }

  static getItem(key) {
    return AsyncStorage.getItem(key);
  }

  static removeItem(key) {
    return AsyncStorage.removeItem(key);
  }
}
