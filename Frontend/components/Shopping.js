import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, Button, Dimensions, Modal, ScrollView } from 'react-native';
import { FAB } from 'react-native-paper';

const windowWidth = Dimensions.get('window').width;
const itemWidth = (windowWidth / 2) - 20;

const articoli = [
  {
    id: '1',
    name: 'Crema Pasticcera',
    image: require('../assets/png/crema.webp'),
    price: '€2.50',
  },
  {
    id: '2',
    name: 'Pistacchio',
    image: require('../assets/png/pistacchio.webp'),
    price: '€2.00',
  },
  {
    id: '3',
    name: 'Panna',
    image: require('../assets/png/panna.webp'),
    price: '€2.50',
  },
  {
    id: '4',
    name: 'Ferrero Rocher',
    image: require('../assets/png/ferrero_rocher.webp'),
    price: '€2.00',
  },
  {
    id: '5',
    name: 'Frutti Rossi',
    image: require('../assets/png/frutti_rossi.webp'),
    price: '€2.50',
  },
  {
    id: '6',
    name: 'Limone',
    image: require('../assets/png/limone.webp'),
    price: '€2.00',
  },
  {
    id: '7',
    name: 'Arancia',
    image: require('../assets/png/arancia.webp'),
    price: '€2.50',
  },
  {
    id: '8',
    name: 'Kinder Bueno',
    image: require('../assets/png/kinder_bueno.webp'),
    price: '€2.00',
  },
  {
    id: '9',
    name: 'Nutella',
    image: require('../assets/png/nutella.webp'),
    price: '€2.50',
  },
  {
    id: '10',
    name: 'Cioccolato Bianco',
    image: require('../assets/png/cioccolato_bianco.webp'),
    price: '€2.00',
  },
  {
    id: '11',
    name: 'Caramello Salato',
    image: require('../assets/png/caramello_salato.webp'),
    price: '€2.50',
  },
  {
    id: '12',
    name: 'Cioccolato Fondente',
    image: require('../assets/png/cioccolato_fondente.webp'),
    price: '€2.00',
  },
];

const Shopping = () => {
  const [cart, setCart] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const addItemToCart = (item) => {
    setCart((currentCart) => {
      const itemIndex = currentCart.findIndex((cartItem) => cartItem.id === item.id);
      if (itemIndex > -1) {
        const newCart = [...currentCart];
        newCart[itemIndex].quantity += 1;
        return newCart;
      }
      return [...currentCart, { ...item, quantity: 1 }];
    });
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.quantity * parseFloat(item.price.replace('€', '')), 0);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer} onPress={() => addItemToCart(item)}>
      <Image source={item.image} style={styles.itemImage} />
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemPrice}>{item.price}</Text>
    </TouchableOpacity>
  );

  const CartModal = () => (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isCartVisible}
      onRequestClose={() => setIsCartVisible(false)}
    >
      <View style={styles.modalView}>
        <ScrollView>
          {cart.map((item, index) => (
            <View key={index} style={styles.cartItem}>
              <Text style={styles.cartItemName}>{item.name}</Text>
              <Text style={styles.cartItemPrice}>{`${item.quantity} x ${item.price}`}</Text>
            </View>
          ))}
        </ScrollView>
        <Text style={styles.totalPrice}>Totale: €{calculateTotal().toFixed(2)}</Text>
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => setIsCartVisible(false)}
        >
          <Text style={styles.textStyle}>Chiudi</Text>
        </TouchableOpacity>
      </View>
    </Modal>
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
      <FAB
        icon="cart"
        style={styles.cart}
        color="white"
        onPress={() => setIsCartVisible(true)}
      />
      <CartModal />
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
    borderWidth: 1,
    borderColor: '#e1e1e1',
    borderRadius: 8,
    padding: 8,
    margin: 8,
    width: '46%',
    alignItems: 'center',
  },
  itemImage: {
    width: '100%',
    height: itemWidth * 0.7,
    resizeMode: 'contain',
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 8,
    color: 'black',
  },
  itemPrice: {
    fontSize: 14,
    color: 'gray',
    color: 'black',
  },
  cart: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    color: 'white',
    backgroundColor: 'black',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#e1e1e1',
  },
  cartItemName: {
    fontWeight: 'bold',
  },
  totalPrice: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  closeButton: {
    backgroundColor: '#2196F3',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 10,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
});

export default Shopping;