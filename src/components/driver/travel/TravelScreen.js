import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import * as constants from 'Agromonte/src/res/constants';


//Home Screen
const TravelScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>Travel Screen</Text>
  
        <Text style={styles.textNameApp}>
          { constants.NameApp }
        </Text>
        
        <Button
           title="Go to Travel Screen ... again"
           onPress={() => navigation.push("Travel")}
        />

        <Button
           title="Go to Home Screen"
           onPress={() => navigation.navigate("Home")}
        />

        <Button
           title="Go Back"
           onPress={() => navigation.goBack()}
        />

        <Button
           title="Go to First Screen"
           onPress={() => navigation.popToTop()}
        />

      </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex:1, 
      alignItems: 'center', 
      justifyContent:'center'
    },

    textNameApp:{
        fontSize: 22, 
        textAlign: "center"
    } 
});

export default TravelScreen;