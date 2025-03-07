import React from 'react';
import { Text, List, TouchableRipple } from 'react-native-paper';
import { View, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

const Account = () => {
  const navigation = useNavigation();
  
  const data = [
    {
      id: '1',
      title: 'Modifica Informazioni Account',
      description: 'Modifica le informazioni dei dati collegati al tuo account',
      icon: 'account-edit'
    },
    {
      id: '2',
      title: 'Opzione Account 2',
      description: 'Descrizione 2',
      icon: 'star-cog'
    }
  ];

  const handleItemClick = (item) => {
    if (item.id === '1') {
      navigation.navigate('EditAccount');
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
      <View style={styles.header}>
        <TouchableRipple
          onPress={() => navigation.goBack()}
          style={styles.iconContainer}>
          <FeatherIcon name="arrow-left" size={24} color="black" />
        </TouchableRipple>
        <Text style={styles.title}>Account</Text>
      </View>
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  iconContainer: {
    marginRight: 8,
  },
  title: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    textAlign: 'left',
  },
});

export default Account;