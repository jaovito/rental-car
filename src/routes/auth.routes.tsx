import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '@screens/SignIn';

const Stack = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <Stack.Navigator 
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name='SignIn' component={SignIn} />
    </Stack.Navigator>
  );
}