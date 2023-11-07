import React from 'react';
import { Text, List, TouchableRipple } from 'react-native-paper';
import { View, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Impostazioni = () => {
    const navigation = useNavigation();

    const data = [
      {
        id: '1',
        title: 'Preferenze',
        description: 'Setta le tue preferenze',
        icon: 'star-cog'
      },
      {
        id: '2',
        title: 'Tema',
        description: 'Scegli il tema che preferisci',
        icon: 'theme-light-dark'
      },
      {
        id: '3',
        title: 'Account',
        description: 'Gestisci Account',
        icon: 'account'
      },
      {
        id: '4',
        title: 'Impostazione 4',
        description: 'Descrizione 4',
        icon: 'cog'
      },
      {
        id: '5',
        title: 'Impostazione 5',
        description: 'Descrizione 5',
        icon: 'cog'
      },
      {
        id: '6',
        title: 'Impostazione 6',
        description: 'Descrizione 6',
        icon: 'cog'
      },
      {
        id: '7',
        title: 'Impostazione 7',
        description: 'Descrizione 7',
        icon: 'cog'
      },
      {
        id: '8',
        title: 'Impostazione 8',
        description: 'Descrizione 8',
        icon: 'cog'
      }
    ];
  
    const handleItemClick = (item) => {
      if (item.title === 'Tema') {
        navigation.navigate('Tema');
      } else if (item.title === 'Preferenze') {
        navigation.navigate('Preferenze');
      } else if (item.title === 'Account') {
        navigation.navigate('Account');
      } else {
        console.log(`Hai selezionato: ${item.title}`);
      }
    };
  
    const renderItem = ({ item }) => (
        <TouchableRipple
        onPress={() => handleItemClick(item)}
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
  });

  export default Impostazioni;