import React, { useContext, useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Button, View, Text, StatusBar } from 'native-base';
import auth from '@react-native-firebase/auth';
import { UserContext } from '../../contexts/UserContext';

const Profile = () => {
  const { user, setUser }: any = useContext(UserContext);

  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const handleLogout = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View>
        <Text>Profile</Text>
        <Text>{user.email}</Text>
        <Button onPress={handleLogout}>logout</Button>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
