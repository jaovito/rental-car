import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackParamList } from 'src/@types/routes';
import { TabRoute } from './tabs.routes';

import { ListCars } from '@screens/ListCars';
import { Buy } from '@screens/Buy';
import { BuyInfo } from '@screens/BuyInfo';

const Stack = createNativeStackNavigator<StackParamList>();

export function AppRoutes() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name='HomeTab' component={TabRoute} />
      <Stack.Screen name='ListCars' component={ListCars} />
      <Stack.Screen name='Buy' component={Buy} />
      <Stack.Screen name='Info' component={BuyInfo} />
    </Stack.Navigator>
  );
}