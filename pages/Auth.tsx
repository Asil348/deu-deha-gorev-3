import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';

const Stack = createNativeStackNavigator();

const Auth = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Sign In">
        <Stack.Screen name="Sign In" component={SignIn} />
        <Stack.Screen name="Sign Up" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Auth;
