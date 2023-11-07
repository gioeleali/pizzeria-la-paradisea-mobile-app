import React from 'react';
import { BottomNavigation } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Account from './Account';
import Shopping from './Shopping';
import Info from './Info';
import Impostazioni from './Impostazioni';
import Tema from './Impostazioni/Tema';
import Preferenze from './Impostazioni/Preferenze';
import Login from './Account/Login';
import Account_Settings from './Impostazioni/Account'

const Stack = createStackNavigator();

const Home = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'account', title: 'Account', focusedIcon: 'account', unfocusedIcon: 'account-outline'},
    { key: 'shopping', title: 'Shopping', focusedIcon: 'shopping', unfocusedIcon: 'shopping-outline' },
    { key: 'info', title: 'Informazioni', focusedIcon: 'home-search', unfocusedIcon: 'home-search-outline' },
    { key: 'impostazioni', title: 'Impostazioni', focusedIcon: 'cog', unfocusedIcon: 'cog-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    account: Account,
    shopping: Shopping,
    info: Info,
    impostazioni: Impostazioni,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Impostazioni" component={Impostazioni} options={{ headerShown: false }} />
        <Stack.Screen name="Tema" component={Tema} options={{ headerShown: false }} />
        <Stack.Screen name="Preferenze" component={Preferenze} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Account" component={Account_Settings} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;