import {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {requestUserPermission} from './src/utils/notificationHelper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const [token, setToken] = useState('');
  useEffect(() => {
    requestUserPermission();
    getFcmToken();
  }, []);

  const getFcmToken = async () => {
    const token = await AsyncStorage.getItem('fcmToken');
    setToken(token);
  };
  return (
    <View>
      <Text>Notification</Text>
    </View>
  );
};

export default App;
