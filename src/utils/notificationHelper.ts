import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';

//request permission for notification
export const requestUserPermission = async () => {
  const authStatus = await messaging().requestPermission();
  console.log(authStatus);
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    getFcmToken();
  }
};

//get fcm token
export const getFcmToken = async () => {
  console.log('check');
  let fcmToken = await AsyncStorage.getItem('fcmToken');

  if (!fcmToken) {
    try {
      const token = await messaging().getToken();

      if (token) {
        await AsyncStorage.setItem('fcmToken', token);
      }
    } catch (error) {
      console.log(`Can not get fcm token ${error}`);
    }
  }
};
