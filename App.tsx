import React, { useEffect, useState } from 'react';
import { NativeBaseProvider } from 'native-base';
import auth from '@react-native-firebase/auth';

import Auth from './pages/Auth';
import { UserContext } from './contexts/UserContext';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import Layout from './pages/Layout';

GoogleSignin.configure({
  webClientId:
    '164108471452-fh7vguqid67v3rjd9etaff9k49s3s0ho.apps.googleusercontent.com',
});

const App = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  const onAuthStateChanged = (user: any) => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null; // if firebase is still initializing, don't render anything

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <NativeBaseProvider>{user ? <Layout /> : <Auth />}</NativeBaseProvider>
    </UserContext.Provider>
  );
};

export default App;
