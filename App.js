/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from 'Agromonte/src/components/driver/home/HomeScreen';
import TravelScreen from 'Agromonte/src/components/driver/travel/TravelScreen';
import SplashScreen from 'Agromonte/src/components/login/SplashScreen';
import Colors from 'Agromonte/src/res/colors';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


//App

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: Colors.mint
        },
        headerTintColor: Colors.white,
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}>
        <Stack.Screen name="Agromonte" component={SplashScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Travel" component={TravelScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );   
};

export default App;