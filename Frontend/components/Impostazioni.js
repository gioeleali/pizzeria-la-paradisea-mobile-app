import React, { useState } from 'react';
import { Text, List, TouchableRipple, Snackbar } from 'react-native-paper';
import { View, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Linking } from 'react-native';

const Impostazioni = () => {
  const navigation = useNavigation();
  const [snackbarVisible, setSnackbarVisible] = useState(false);

  const data = [
    {
      id: '1',
      title: 'Account',
      description: 'Gestisci Account',
      icon: 'account'
    },
    {
      id: '2',
      title: 'Preferenze',
      description: 'Setta le tue preferenze',
      icon: 'star-cog'
    },
    {
      id: '3',
      title: 'Tema',
      description: 'Scegli il tema che preferisci',
      icon: 'theme-light-dark'
    },
    {
      id: '4',
      title: 'Autore',
      description: 'Telegram: @gioeleali',
      icon: 'account-heart'
    },
    {
      id: '5',
      title: 'Versione',
      description: '1.0',
      icon: 'information'
    }
  ];

  const handleItemClick = (item) => {
    if (item.title === 'Tema') {
      navigation.navigate('Tema');
    } else if (item.title === 'Preferenze') {
      navigation.navigate('Preferenze');
    } else if (item.title === 'Account') {
      navigation.navigate('Account');
    } else if (item.title === 'Autore') {
      Linking.openURL('https://t.me/gioeleali');
    } else {
      console.log(`Hai selezionato: ${item.title}`);
    }
  };

  const handleItemLongPress = (item) => {
    if (item.title === 'Versione') {
      setSnackbarVisible(true);
    }
  };

  const renderItem = ({ item }) => (
    <TouchableRipple
      onPress={() => handleItemClick(item)}
      onLongPress={() => handleItemLongPress(item)}
      rippleColor="rgba(0, 0, 0, 0.1)">
      <List.Item
        title={item.title}
        description={item.description}
        left={(props) => <List.Icon {...props} icon={item.icon} />}
      />
    </TouchableRipple>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Impostazioni</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
      <Snackbar
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
        duration={Snackbar.DURATION_SHORT}
        style={styles.snackbar}
      >ITS Prodigi 2022-2024 ♥</Snackbar>
    </View>
  );
}

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
  description: {
    fontSize: 16,
    textAlign: 'left',
  },
  snackbar: {
    position: 'absolute',
    bottom: 16,
    left: '50%',
    transform: [{ translateX: -100 }],
    width: 200,
    alignItems: 'center',
    textAlign: 'center',
  },
});

export default Impostazioni;