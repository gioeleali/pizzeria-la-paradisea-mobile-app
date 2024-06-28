import React, { useState } from 'react';
import { Text, TextInput, Button, HelperText, useTheme, TouchableRipple } from 'react-native-paper';
import { View, StyleSheet, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import { Dimensions } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';
import {url} from '../../.config/config'

const { width, height } = Dimensions.get('window');

const Account = () => {
    const navigation = useNavigation();

    const [nome, setNome] = useState('');
    const [cognome, setCognome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => { 
      setShowPassword(!showPassword); 
    }; 
    const [isEmailTouched, setEmailTouched] = useState(false);

    const isNomeValid = (text) => {
      const regex = /[0-9]/;
      return text === '' || (!regex.test(text) && text.length > 0);
    };
    
    const isCognomeValid = (text) => {
      const regex = /[0-9]/;
      return text === '' || (!regex.test(text) && text.length > 0);
    };
    
    const isEmailValid = (text) => {
      return !isEmailTouched || text === '' || (text.includes("@") && text.length > 0);
    };
    
    const isPasswordValid = (text) => {
      const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/;
      return text === '' || (regex.test(text) && text.length > 0);
    };

    const submitData = () => {
      axios.post('http:///register/', {
        email: email,
        password: password
      })
      .then(response => {
        console.log('User registered:', response.data);
      })
      .catch(error => {
        console.error('Registration error:', error);
      });
    };

    return (
        <View style={styles.container}>
            <FastImage
                style={styles.backgroundImage}
                source={require('../../assets/png/bg.png')}
                resizeMode={FastImage.resizeMode.cover}
            />
          <Text style={styles.title}>Login</Text>
          <TextInput
            style={styles.input}
            mode="outlined"
            label="Email"
            onChangeText={(text) => setEmail(text)}
            onBlur={() => setEmailTouched(true)}
            dense={true}
          />
          {isEmailValid(email) ? null : (
            <HelperText type="error" style={styles.helperText}>
              L'email deve contenere la @!
            </HelperText>
          )}
          <TextInput
            label="Password"
            secureTextEntry={!showPassword}
            style={styles.input}
            value={password}
            onChangeText={(text) => setPassword(text)}
            dense={true}
            right={
                <TextInput.Icon
                  name={showPassword ? 'eye-off' : 'eye'} 
                  size={24} 
                  color="#aaa" 
                  onPress={toggleShowPassword} 
                />
            }
          />
          {isPasswordValid(password) ? null : (
            <HelperText type="error" style={styles.helperText}>
              La password deve contenere almeno una maiuscola, una minuscola e un carattere speciale!
            </HelperText>
          )}
          <View style={{ flexDirection: 'row' }}>
            <Button
              mode="contained"
              onPress={() => {
                //console.log('Email:', email);
                //console.log('Password:', password);
                submitData();
                navigation.navigate('Home');

              }}
              style={[styles.rectangleButton, { backgroundColor: 'black' }]}
              labelStyle={{ fontSize: 18, fontFamily: 'Product-Sans-Regular' }}
            >Accedi</Button>
          </View>
          <Text style={[styles.additionalText, { fontFamily: 'Product-Sans-Regular' }]}>Sei nuovo?
            <Text
              style={styles.link}
              onPress={() => navigation.navigate('Register')}
            > Registrati</Text>
          </Text>
        </View>
      );
  };

  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white', 
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 16,
      marginTop: -50,
    },
    backgroundImage: {
      position: 'absolute',
      width: width,
      height: height + 50,
      top: 0,
      left: 0,
      opacity: 0.2,
    },
    title: {
      fontFamily: 'Product-Sans-Bold',
      color: 'black',
      fontSize: 24,
      marginBottom: 16,
      alignSelf: 'center',
    },
    input: {
      width: '90%',
      marginBottom: 16,
    },
    helperText: {
      marginTop: -20,
      marginBottom: 10,
      alignSelf: 'center',
    },
    rectangleButton: {
      height: 40,
      borderRadius: 10,
      margin: 8,
      width: '90%',
    },
    additionalText: {
      color: 'black',
      fontSize: 14,
      alignSelf: 'center',
    },
    link: {
      textDecorationLine: 'underline',
      color: 'black',
    }
  });  

  export default Account;