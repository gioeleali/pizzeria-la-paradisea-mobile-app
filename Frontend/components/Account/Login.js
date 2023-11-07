import React, { useState } from 'react';
import { Text, TextInput, Button, HelperText, useTheme, TouchableRipple } from 'react-native-paper';
import { View, StyleSheet, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

const Login = () => { 
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isEmailTouched, setEmailTouched] = useState(false);
    
    const isEmailValid = (text) => {
      return !isEmailTouched || text === '' || (text.includes("@") && text.length > 0);
    };
    
    const isPasswordValid = (text) => {
      const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/;
      return text === '' || (regex.test(text) && text.length > 0);
    };    

    return (
        <View style={styles.container}>
            <TouchableRipple
          onPress={() => navigation.goBack()}
          style={styles.iconContainer}>
          <FeatherIcon name="arrow-left" size={24} color="black" />
        </TouchableRipple>
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
            right={
              <TextInput.Icon
                name={showPassword ? 'eye-off' : 'eye'}
                onPress={() => setShowPassword(!showPassword)}
              />
            }
            style={styles.input}
            value={password}
            onChangeText={(text) => setPassword(text)}
            dense={true}
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
                console.log('Email:', email);
                console.log('Password:', password);
              }}
              style={[styles.rectangleButton, { backgroundColor: 'black' }]}
              labelStyle={{ fontSize: 18 }}
            >Accedi</Button>
          </View>
          <Text style={styles.additionalText}>Sei nuovo?
            <Text
              style={styles.link}
              onPress={() => navigation.navigate('Account')}
            > Registrati</Text>
          </Text>
        </View>
      );
  };

  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white', 
      flex: 1,
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      padding: 16,
    },
    title: {
      color: 'black',
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
    },
    input: {
      width: '100%',
      marginBottom: 16,
    },
    helperText: {
        marginTop: -20,
        marginBottom: 10,
    },
    rectangleButton: {
      flex: 1,
      height: 40,
      borderRadius: 50,
      margin: 8,
      width: 20,
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

  export default Login;