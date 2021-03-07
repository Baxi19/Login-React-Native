import React from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity, Dimensions, TextInput, Platform} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
import Colors from 'Agromonte/src/res/colors';
import * as Constants from 'Agromonte/src/res/constants';


//SignIn Screen
const SignInScreen = ({navigation}) => {
  
  const [data, setData] = React.useState({
    email: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true
  });   
  
  //TODO: check limite
  const textInputChange = (val) => {
    if(val.trim().length >= 11){
      setData({
        ...data,
        email: val,
        check_textInputChange: true
      });
    }else{
      setData({
        ...data,
        email: val,
        check_textInputChange: false
      });
    }
  }

  const handlePasswordChange = (val) => {
    setData({
      ...data,
      password: val
    });
  }

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry
    });
  }

  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <Text style={styles.text_header}>{Constants.SignInTitle}</Text>
      </View>  
      
      <Animatable.View style={styles.footer}
        animation="fadeInUpBig"
      >
        
        <Text style={[styles.text_footer, {marginTop:15}]}>{Constants.SignInEmail}</Text>
        <View style={styles.action}>
          <FontAwesome
            name="user-o"
            color={Colors.teal_blue}
            size={20}
          />
          <TextInput 
            placeholder={Constants.SignInEmailPlaceholder}
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => textInputChange(val)}
          />
          
          {data.check_textInputChange ? 
            <Animatable.View
              animation="bounceIn"
            >
              <Feather
                name="check-circle"
                color={Colors.green}
                size={20}
              />
            </Animatable.View>
            : null 
          }
        
        </View>
        
        <Text style={[styles.text_footer, {marginTop:35}]}>{Constants.SignInPassword}</Text>
        <View style={styles.action}>
          <Feather
            name="lock"
            color={Colors.teal_blue}
            size={20}
          />
          <TextInput 
            placeholder={Constants.SignInPasswordPlaceholder}
            secureTextEntry={data.secureTextEntry ? true : false }
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => handlePasswordChange(val)}
          />
          <TouchableOpacity
            onPress={updateSecureTextEntry}
          >
            {data.secureTextEntry ? 
              <Feather
                name="eye-off"
                color={Colors.grey}
                size={20}
              />
              :
              <Feather
                name="eye"
                color={Colors.grey}
                size={20}
              />
            }
          </TouchableOpacity>
        </View>

        <View style={[styles.Button, {marginTop:35}]}>
          <TouchableOpacity
            style={styles.signIn}
            onPress={() => navigation.navigate("Home")}
          >
            <LinearGradient
              colors={[Colors.robin_egg_blue, Colors.persian_green]}
              style={styles.signIn}
            >
              <Text style={styles.textSign}>{Constants.SignInButton}</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

      </Animatable.View>  
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: Colors.teal
  },
  header: {
      flex: 1,
      justifyContent: 'flex-end',
      paddingHorizontal: 20,
      paddingBottom: 50
  },
  footer: {
      flex: 3,
      backgroundColor: Colors.white,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingHorizontal: 20,
      paddingVertical: 30
  },
  text_header: {
      color: Colors.white,
      fontWeight: 'bold',
      fontSize: 30
  },
  text_footer: {
      color: '#05375a',
      fontSize: 18
  },
  action: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#f2f2f2',
      paddingBottom: 5
  },
  actionError: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#FF0000',
      paddingBottom: 5
  },
  textInput: {
      flex: 1,
      marginTop: Platform.OS === 'ios' ? 0 : -12,
      paddingLeft: 10,
      color: '#05375a',
  },
  errorMsg: {
      color: '#FF0000',
      fontSize: 14,
  },
  button: {
      alignItems: 'center',
      marginTop: 50
  },
  signIn: {
      width: '100%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10
  },
  textSign: {
      fontSize: 18,
      fontWeight: 'bold',
      color: Colors.white
  }
});

export default SignInScreen;