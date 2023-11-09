import React, { useState } from 'react';
import { Text, TextInput, Button, HelperText, useTheme } from 'react-native-paper';
import { View, StyleSheet, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Account = () => {
    const navigation = useNavigation();

    const [nome, setNome] = useState('');
    const [cognome, setCognome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
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

    return (
        <View style={styles.container}>
          <Text style={styles.title}>Account</Text>
          <TextInput
            style={styles.input}
            mode="outlined"
            label="Nome"
            placeholder="Mario"
            value={nome}
            onChangeText={(text) => setNome(text)}
            dense={true}
          />
          {isNomeValid(nome) ? null : (
            <HelperText type="error" style={styles.helperText}>
              Il nome non può contenere numeri!
            </HelperText>
          )}
          <TextInput
            style={styles.input}
            mode="outlined"
            label="Cognome"
            placeholder="Rossi"
            value={cognome}
            onChangeText={(text) => setCognome(text)}
            dense={true}
          />
          {isCognomeValid(cognome) ? null : (
            <HelperText type="error" style={styles.helperText}>
              Il cognome non può contenere numeri!
            </HelperText>
          )}
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
                console.log('Nome:', nome);
                console.log('Cognome:', cognome);
                console.log('Email:', email);
                console.log('Password:', password);
              }}
              style={[styles.rectangleButton, { backgroundColor: 'black' }]}
              labelStyle={{ fontSize: 18 }}
            >Registrati</Button>
          </View>
          <Text style={styles.additionalText}>Hai già un account?
            <Text
              style={styles.link}
              onPress={() => navigation.navigate('Login')}
            > Accedi</Text>
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

  export default Account;