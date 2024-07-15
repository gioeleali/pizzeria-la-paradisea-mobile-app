import React, { useState, useEffect } from 'react';
import { Text, TextInput, Button, HelperText } from 'react-native-paper';
import { View, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import axios from 'axios';

const { width, height } = Dimensions.get('window');

const Account = () => {
  const navigation = useNavigation();
  const [nome, setNome] = useState('');
  const [cognome, setCognome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isEmailTouched, setEmailTouched] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [csrfToken, setCsrfToken] = useState('');

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

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

  useEffect(() => {
    // Fetch CSRF token from the server
    axios.get('http://10.0.2.2:8000/csrf/')
      .then(response => {
        setCsrfToken(response.data.csrfToken);
      })
      .catch(error => {
        console.error('Error fetching CSRF token:', error);
      });
  }, []);

  const submitData = () => {
    setErrorMessage('');
    console.log('Submitting data to the server...');
    axios.post('http://10.0.2.2:8000/api/register/', {
      nome: nome,
      cognome: cognome,
      email: email,
      password: password
    }, {
      headers: {
        'X-CSRFToken': csrfToken,
        'Content-Type': 'application/json'
      },
      withCredentials: true
    })
    .then(response => {
      console.log('User registered:', response.data);
      navigation.navigate('Home');
    })
    .catch(error => {
      console.error('Registration error:', error.response?.data || error);
      setErrorMessage('Registration error: ' + JSON.stringify(error.response?.data || error.message));
    });
  };

  return (
    <View style={styles.container}>
      <FastImage
        style={styles.backgroundImage}
        source={require('../../assets/png/bg.png')}
        resizeMode={FastImage.resizeMode.cover}
      />
      <Text style={styles.title}>Benvenuto!</Text>
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
        value={email}
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
      {errorMessage ? (
        <HelperText type="error" style={styles.helperText}>
          {errorMessage}
        </HelperText>
      ) : null}
      <View style={{ flexDirection: 'row' }}>
        <Button
          mode="contained"
          onPress={submitData}
          style={[styles.rectangleButton, { backgroundColor: 'black' }]}
          labelStyle={{ fontSize: 18, fontFamily: 'Product-Sans-Regular' }}
        >
          Registrati
        </Button>
      </View>
      <Text style={[styles.additionalText, { fontFamily: 'Product-Sans-Regular' }]}>
        Hai già un account?
        <Text style={styles.link} onPress={() => navigation.navigate('Login')}>
          Accedi
        </Text>
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
    justifyContent: 'center',
  },
  additionalText: {
    marginTop: 16,
  },
  link: {
    fontWeight: 'bold',
  },
});

export default Account;