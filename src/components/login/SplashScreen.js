import React from 'react';
import { 
    View, 
    Text, 
    Dimensions,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';
import Colors from 'Agromonte/src/res/colors';
import * as Constants from 'Agromonte/src/res/constants';

const SplashScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
            <Animatable.Image 
                animation="bounceIn"
                duraton="1500"
                source={require('../../assets/logo.png')}
                style={styles.logo}
                resizeMode="stretch"
            />
        </View>
        <Animatable.View style={styles.footer}
            animation="fadeInUpBig"
        >
            <Text style={styles.title}>{Constants.SplashTitle}</Text>  
            <Text style={styles.text}>{Constants.SplashDescription}</Text>  
            <View style={styles.button}>
                <TouchableOpacity onPress={() => navigation.navigate("Registrarse")}>
                    <LinearGradient
                        colors={[Colors.robin_egg_blue, Colors.persian_green]}
                        style={styles.signIn}
                    >
                        <Text style={styles.textSign}>{Constants.SplashButton}</Text>
                        <MaterialIcons 
                            name="navigate-next"
                            color={Colors.white}
                            size={20}
                        />
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </Animatable.View>
      </View>
    );
};

export default SplashScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: Colors.teal
  },
  header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 1,
      backgroundColor: Colors.white,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  logo: {
      width: height_logo,
      height: height_logo
  },
  title: {
      color: Colors.teal_blue,
      fontSize: 30,
      fontWeight: 'bold'
  },
  text: {
      color: Colors.grey,
      marginTop:5
  },
  button: {
      alignItems: 'flex-end',
      marginTop: 30
  },
  signIn: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row'
  },
  textSign: {
      color: Colors.white,
      fontWeight: 'bold'
  }
});