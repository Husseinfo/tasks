import AsyncStorage from '@react-native-community/async-storage';

export default class Storage {
  static getArray = async key => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value) {
        return JSON.parse(value);
      }
      return [];
    } catch (e) {
      console.log(e);
    }
  };

  static addToArray = async (key, item) => {
    try {
      let old = await this.getArray(key);
      old = old.filter(i => i.title !== item.title);
      old.unshift(item);
      await AsyncStorage.setItem(key, JSON.stringify(old));
    } catch (e) {
      console.log(e);
    }
  };

  static removeFromArray = async (key, item) => {
    try {
      let old = await this.getArray(key);
      old = old.filter(i => i.title !== item.title);
      await AsyncStorage.setItem(key, JSON.stringify(old));
    } catch (e) {
      console.log(e);
    }
  };

  static addTask = async task => await this.addToArray('tasks', task);

  static deleteTask = async task => await this.removeFromArray('tasks', task);
}
