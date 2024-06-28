import React, { useState } from 'react';
import { Text, List, TouchableRipple, Switch } from 'react-native-paper';
import { View, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

const Tema = () => {
  const navigation = useNavigation();
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const data = [
    {
      id: '1',
      title: 'Tema scuro',
      description: 'Applica il tema scuro per una maggiore durata della batteria',
      icon: 'moon-waning-crescent',
      switch: true
    },
  ];

  const handleItemClick = (item) => {
    if (item.title === 'Tema scuro') {
      setIsDarkTheme(!isDarkTheme);
    }
    console.log(`Hai selezionato: ${item.title}`);
  };

  const renderItem = ({ item }) => (
    <TouchableRipple
      onPress={() => handleItemClick(item)}
      rippleColor="rgba(0, 0, 0, 0.1)">
      <List.Item
        title={item.title}
        description={item.description}
        left={(props) => <List.Icon {...props} icon={item.icon} />}
        right={(props) => item.switch && (
          <Switch
            value={isDarkTheme}
            onValueChange={() => handleItemClick(item)}
          />
        )}
      />
    </TouchableRipple>
  );

  return (
    <View style={[styles.container, isDarkTheme && styles.darkContainer]}>
      <View style={styles.header}>
        <TouchableRipple
          onPress={() => navigation.goBack()}
          style={styles.iconContainer}>
          <FeatherIcon name="arrow-left" size={24} color={isDarkTheme ? 'white' : 'black'} />
        </TouchableRipple>
        <Text style={[styles.title, isDarkTheme && styles.darkTitle]}>Tema</Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
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
  darkContainer: {
    backgroundColor: 'black',
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
  darkTitle: {
    color: 'white',
  },
  description: {
    fontSize: 16,
    textAlign: 'left',
  },
});

export default Tema;
