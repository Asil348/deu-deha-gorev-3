import React, { useState } from 'react';
import { View, StatusBar, Input, Button } from 'native-base';
import { useColorScheme, SafeAreaView } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import auth from '@react-native-firebase/auth';
import onGoogleButtonPress from '../../lib/onGoogleButtonPress';

const SignIn = ({ navigation }: any) => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [email, setEmail] = useState<any>('');
  const [password, setPassword] = useState<any>('');
  const [isInvalid, setIsInvalid] = useState(false);

  const handleSubmit = () => {
    console.log(email);
    console.log(password);

    if (email === '' || password === '') {
      return setIsInvalid(true);
    }

    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User signed in!');
      })
      .catch(error => {
        console.log(error.code);
        return setIsInvalid(true);
      });
  };

  const handleGoogleSignIn = () => {
    onGoogleButtonPress().then(() => console.log('Signed in with Google!'));
  };

  return (
    <>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <View
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100%"
          mx="4">
          <Input
            type="text"
            placeholder="E-posta"
            value={email}
            onChange={e => setEmail(e.nativeEvent.text)}
            mb="2"
            isRequired
            isInvalid={isInvalid}
          />
          <Input
            type="password"
            placeholder="Parola"
            value={password}
            onChange={e => setPassword(e.nativeEvent.text)}
            mb="4"
            isRequired
            isInvalid={isInvalid}
          />
          <Button width="100%" onPress={handleSubmit} mb="6">
            Giriş Yap
          </Button>
          <Button
            width="100%"
            colorScheme="secondary"
            onPress={() => navigation.navigate('Sign Up')}
            mb="6">
            Kayıt Ol
          </Button>
          <Button
            width="100%"
            colorScheme="trueGray"
            onPress={handleGoogleSignIn}
            mb="6">
            Google ile giriş yap
          </Button>
        </View>
      </SafeAreaView>
    </>
  );
};

export default SignIn;
