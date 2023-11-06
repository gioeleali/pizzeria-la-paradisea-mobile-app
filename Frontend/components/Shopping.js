import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import { FAB } from 'react-native-paper';

const articoli = [
  {
    id: '1',
    name: 'Crema',
    image: require('../assets/png/crema.png'),
    price: '€2.50',
  },
  {
    id: '2',
    name: 'Pistacchio',
    image: require('../assets/png/pistacchio.png'),
    price: '€2.00',
  },
  {
    id: '3',
    name: 'Panna',
    image: require('../assets/png/crema.png'),
    price: '€2.50',
  },
  {
    id: '4',
    name: 'Kinder',
    image: require('../assets/png/pistacchio.png'),
    price: '€2.00',
  },
];

const Shopping = () => {
  const [cart, setCart] = useState([]);

  const addItemToCart = (item) => {
    setCart([...cart, item]);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => addItemToCart(item)} style={styles.itemContainer}>
      <Image source={item.image} style={styles.itemImage} />
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemPrice}>{item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shopping</Text>
      <FlatList
        data={articoli}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={2}
      />
      <View style={styles.cartContainer}>
        <FAB
          icon="cart"
          style={styles.cart}
          color="white"
          onPress={() => console.log("Apri il carrello")}
        />
      </View>
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
  itemContainer: {
    backgroundColor: 'white',
    width: '45%',
    padding: 8,
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemImage: {
    aspectRatio: 1,
    width: 50,
    height: 50,
    resizeMode: 'contain',
    borderRadius: 8,
  },
  itemName: {
    flex: 1,
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  itemPrice: {
    fontSize: 12,
    color: 'gray',
    marginTop: 3,
  },
  cartContainer: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    alignItems: 'center',
    left: 175,
  },
  cart: {
    backgroundColor: 'black',
    borderRadius: 16,
  },
});

export default Shopping;