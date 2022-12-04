import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import React, { useState } from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Button, Input, View } from 'native-base';
import auth from '@react-native-firebase/auth';
import onGoogleButtonPress from '../../lib/onGoogleButtonPress';

const SignUp = ({ navigation }: any) => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [email, setEmail] = useState<any>('');
  const [password, setPassword] = useState<any>('');
  const [isInvalid, setIsInvalid] = useState(false);

  const handleSubmit = () => {
    console.log('email', email);
    console.log('password', password);

    if (email === '' || password === '') {
      return setIsInvalid(true);
    }

    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User created!');
      })
      .catch(error => {
        console.log(error.code);
      });
  };

  const handleGoogleSignIn = () => {
    onGoogleButtonPress().then(() => console.log('Signed in with Google!'));
  };

  return (
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
          Kayıt Ol
        </Button>
        <Button
          width="100%"
          colorScheme="secondary"
          onPress={() => navigation.navigate('Sign In')}
          mb="6">
          Giriş Yap
        </Button>
        <Button
          width="100%"
          colorScheme="trueGray"
          onPress={handleGoogleSignIn}
          mb="6">
          Google ile kayıt ol
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
