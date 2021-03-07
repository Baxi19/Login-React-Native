import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from 'Agromonte/src/components/login/SplashScreen';
import SignInScreen from 'Agromonte/src/components/login/SignInScreen';


const Stack = createStackNavigator();

const RootStackScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='none'>
        <Stack.Screen name="Agromonte" component={SplashScreen} headerMode='none'/>
        <Stack.Screen name="Registrarse" component={SignInScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );   
};

export default RootStackScreen;

