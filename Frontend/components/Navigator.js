import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Impostazioni from './Impostazioni';
import Tema from './Impostazioni/Tema';
import Login from './Account/Login';
import Account from './Account';
import App from './App'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="App">
        <Stack.Screen name="Impostazioni" component={Impostazioni} />
        <Stack.Screen name="Tema" component={Tema} />
        <Stack.Screen name="App" component={App} />
        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;