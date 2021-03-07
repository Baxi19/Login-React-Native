import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from 'Agromonte/src/components/driver/home/HomeScreen';
import TravelScreen from 'Agromonte/src/components/driver/travel/TravelScreen';
import Colors from 'Agromonte/src/res/colors';


const Stack = createStackNavigator();

const DriverStackScreen = () => {
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
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Travel" component={TravelScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );   
};

export default DriverStackScreen;
