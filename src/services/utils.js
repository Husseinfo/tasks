import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Utils {
  static hashCode = string => {
        var hash = 0;
        for (var i = 0; i < string.length; i++) {
            var code = string.charCodeAt(i);
            hash = ((hash<<5)-hash)+code;
            hash = hash & hash; // Convert to 32bit integer
        }
        return hash;
  };
}
