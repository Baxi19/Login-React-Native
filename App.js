import React from 'react';
import DriverStackScreen from 'Agromonte/src/components/driver/DriverStackScreen';
import RootStackScreen from 'Agromonte/src/components/login/RootStackScreen';
/*
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from 'Agromonte/src/components/driver/home/HomeScreen';
import TravelScreen from 'Agromonte/src/components/driver/travel/TravelScreen';
import SplashScreen from 'Agromonte/src/components/login/SplashScreen';
import SignInScreen from 'Agromonte/src/components/login/SignInScreen';
import Colors from 'Agromonte/src/res/colors';
*/


//const Stack = createStackNavigator();
const logged = false;

const App = () => {
  if(logged){
    return (
      <DriverStackScreen/>
    );
  }else{
    return (
      <RootStackScreen/>
    );
  }
}

/*
//App
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: Colors.teal
        },
        headerTintColor: Colors.white,
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}
      //TODO: make 3 stacks (root, driver, grocer)
      //headerMode='none'
      >
        <Stack.Screen name="Agromonte" component={SplashScreen}/>
        <Stack.Screen name="Registrarse" component={SignInScreen}/>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Travel" component={TravelScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );   
};
*/

export default App;