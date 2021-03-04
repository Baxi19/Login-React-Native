import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import * as constants from 'Agromonte/src/res/constants';


//Home Screen
const HomeScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
  
        <Text style={styles.textNameApp}>
          { constants.NameApp }
        </Text>

        <Button
           title="Go to Travel Screen"
           onPress={() => navigation.navigate("Travel")}
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

export default HomeScreen;