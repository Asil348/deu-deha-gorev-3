import React from 'react'
import Profile from './profile/Profile'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const Layout = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Profile">
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Layout