import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Dimensions, Modal, ScrollView } from 'react-native';
import { FAB } from 'react-native-paper';

const windowWidth = Dimensions.get('window').width;
const itemWidth = (windowWidth / 2) - 20;

const articoli = [
  { id: '1', name: 'Marinara', price: '€5.80', ingredients: 'Pomodoro, aglio, origano, olio', allergens: 'Nessuno', spicy: false, vegetarian: true },
  { id: '2', name: 'Margherita', price: '€6.80', ingredients: 'Pomodoro, mozzarella, basilico', allergens: 'Latte', spicy: false, vegetarian: true },
  { id: '3', name: 'Funghi', price: '€7.30', ingredients: 'Pomodoro, mozzarella, funghi', allergens: 'Latte', spicy: false, vegetarian: true },
  { id: '4', name: 'Olive', price: '€7.30', ingredients: 'Pomodoro, mozzarella, olive', allergens: 'Latte', spicy: false, vegetarian: true },
  { id: '5', name: 'Rucola', price: '€7.30', ingredients: 'Pomodoro, mozzarella, rucola', allergens: 'Latte', spicy: false, vegetarian: true },
  { id: '6', name: 'Viennese', price: '€7.30', ingredients: 'Pomodoro, mozzarella, wurstel', allergens: 'Latte, Glutine', spicy: false, vegetarian: false },
  { id: '7', name: 'Prataiola', price: '€7.70', ingredients: 'Pomodoro, mozzarella, funghi, pancetta', allergens: 'Latte', spicy: false, vegetarian: false },
  { id: '8', name: 'Rugiada', price: '€7.70', ingredients: 'Pomodoro, mozzarella, rughetta, pomodorini', allergens: 'Latte', spicy: false, vegetarian: true },
  { id: '9', name: 'Napoletana', price: '€7.70', ingredients: 'Pomodoro, mozzarella, acciughe, capperi, origano', allergens: 'Latte, Pesce', spicy: false, vegetarian: false },
  { id: '10', name: 'Parmigiana', price: '€7.70', ingredients: 'Pomodoro, mozzarella, melanzane, parmigiano', allergens: 'Latte', spicy: false, vegetarian: true },
  { id: '11', name: 'Calzone Tradizionale', price: '€7.50', ingredients: 'Pomodoro, mozzarella, prosciutto cotto', allergens: 'Latte, Glutine', spicy: false, vegetarian: false },
  { id: '12', name: 'Calzone Farcito', price: '€8.00', ingredients: 'Pomodoro, mozzarella, funghi, prosciutto cotto', allergens: 'Latte, Glutine', spicy: false, vegetarian: false },
  { id: '13', name: '4 Formaggi', price: '€8.00', ingredients: 'Mozzarella, gorgonzola, grana, fontina', allergens: 'Latte', spicy: false, vegetarian: true },
  { id: '14', name: 'Primavera', price: '€8.00', ingredients: 'Pomodoro, mozzarella, pomodorini, rucola, scaglie di grana', allergens: 'Latte', spicy: false, vegetarian: true },
  { id: '15', name: 'Crudo', price: '€8.50', ingredients: 'Pomodoro, mozzarella, prosciutto crudo', allergens: 'Latte', spicy: false, vegetarian: false },
  { id: '16', name: 'Schiacciata', price: '€8.50', ingredients: 'Pomodoro, mozzarella, schiacciata calabrese', allergens: 'Latte, Glutine', spicy: true, vegetarian: false },
  { id: '17', name: 'Schiacciata Piccante', price: '€8.50', ingredients: 'Pomodoro, mozzarella, schiacciata calabrese piccante', allergens: 'Latte, Glutine', spicy: true, vegetarian: false },
  { id: '18', name: 'Capricciosa', price: '€8.50', ingredients: 'Pomodoro, mozzarella, funghi, carciofi, prosciutto cotto, olive', allergens: 'Latte, Glutine', spicy: false, vegetarian: false },
  { id: '19', name: 'Ortolana', price: '€8.50', ingredients: 'Pomodoro, mozzarella, verdure miste', allergens: 'Latte', spicy: false, vegetarian: true },
  { id: '20', name: 'Caprese', price: '€8.50', ingredients: 'Pomodoro, mozzarella di bufala, basilico', allergens: 'Latte', spicy: false, vegetarian: true },
  { id: '21', name: 'Prosciutto', price: '€8.50', ingredients: 'Pomodoro, mozzarella, prosciutto cotto', allergens: 'Latte', spicy: false, vegetarian: false },
  { id: '22', name: 'Tonno', price: '€8.50', ingredients: 'Pomodoro, mozzarella, tonno, cipolla', allergens: 'Latte, Pesce', spicy: false, vegetarian: false },
  { id: '23', name: 'Salsiccia', price: '€8.50', ingredients: 'Pomodoro, mozzarella, salsiccia', allergens: 'Latte', spicy: false, vegetarian: false },
  { id: '24', name: 'Diavola', price: '€8.50', ingredients: 'Pomodoro, mozzarella, salame piccante', allergens: 'Latte', spicy: true, vegetarian: false },
  { id: '25', name: 'Bufalina', price: '€9.00', ingredients: 'Pomodoro, mozzarella di bufala, basilico', allergens: 'Latte', spicy: false, vegetarian: true },
  { id: '26', name: 'Provola', price: '€9.00', ingredients: 'Pomodoro, mozzarella, provola affumicata', allergens: 'Latte', spicy: false, vegetarian: true },
  { id: '27', name: 'Golosa', price: '€9.00', ingredients: 'Pomodoro, mozzarella, patate, salsiccia', allergens: 'Latte', spicy: false, vegetarian: false },
  { id: '28', name: 'Tartufo', price: '€9.50', ingredients: 'Mozzarella, crema di tartufo, funghi', allergens: 'Latte', spicy: false, vegetarian: true },
  { id: '29', name: 'Salame Piccante', price: '€9.50', ingredients: 'Pomodoro, mozzarella, salame piccante', allergens: 'Latte', spicy: true, vegetarian: false },
  { id: '30', name: 'Rustica', price: '€9.50', ingredients: 'Pomodoro, mozzarella, funghi, pancetta, cipolla', allergens: 'Latte', spicy: false, vegetarian: false },
  { id: '31', name: 'Montanara', price: '€9.50', ingredients: 'Pomodoro, mozzarella, funghi, salsiccia', allergens: 'Latte', spicy: false, vegetarian: false },
  { id: '32', name: 'Ghiottona', price: '€9.50', ingredients: 'Pomodoro, mozzarella, funghi, prosciutto cotto, salsiccia', allergens: 'Latte', spicy: false, vegetarian: false },
  { id: '33', name: 'Pizza Con Lardo', price: '€10.00', ingredients: 'Pomodoro, mozzarella, lardo', allergens: 'Latte', spicy: false, vegetarian: false },
  { id: '34', name: 'Bufala Crudo', price: '€10.50', ingredients: 'Pomodoro, mozzarella di bufala, prosciutto crudo', allergens: 'Latte', spicy: false, vegetarian: false },
  { id: '35', name: 'Reale', price: '€10.50', ingredients: 'Pomodoro, mozzarella, porcini, pancetta', allergens: 'Latte', spicy: false, vegetarian: false },
  { id: '36', name: 'Pizza con Bresaola', price: '€10.50', ingredients: 'Pomodoro, mozzarella, bresaola, rucola', allergens: 'Latte', spicy: false, vegetarian: false },
  { id: '37', name: 'Fiocco', price: '€11.50', ingredients: 'Mozzarella, fiocco di prosciutto, parmigiano', allergens: 'Latte', spicy: false, vegetarian: false },
  { id: '38', name: 'Porcini', price: '€11.50', ingredients: 'Pomodoro, mozzarella, porcini', allergens: 'Latte', spicy: false, vegetarian: true },
  { id: '39', name: 'Bufalina DOP', price: '€12.50', ingredients: 'Pomodoro, mozzarella di bufala DOP, basilico', allergens: 'Latte', spicy: false, vegetarian: true },

  { id: '40', name: 'Calzone Classico', price: '€8.00', ingredients: 'Pomodoro, mozzarella, prosciutto cotto', allergens: 'Latte, Glutine', spicy: false, vegetarian: false },
  { id: '41', name: 'Calzone Ortolano', price: '€8.00', ingredients: 'Pomodoro, mozzarella, verdure miste', allergens: 'Latte, Glutine', spicy: false, vegetarian: true },
  { id: '42', name: 'Calzone Fritto', price: '€9.00', ingredients: 'Pomodoro, mozzarella, prosciutto cotto, funghi', allergens: 'Latte, Glutine', spicy: false, vegetarian: false },
  { id: '43', name: 'Calzone Goloso', price: '€9.00', ingredients: 'Pomodoro, mozzarella, salsiccia, funghi', allergens: 'Latte, Glutine', spicy: false, vegetarian: false },
  { id: '44', name: 'Calzone Bufalina', price: '€9.00', ingredients: 'Pomodoro, mozzarella di bufala, basilico', allergens: 'Latte, Glutine', spicy: false, vegetarian: true },
  { id: '45', name: 'Calzone Bufala Crudo', price: '€10.00', ingredients: 'Pomodoro, mozzarella di bufala, prosciutto crudo', allergens: 'Latte, Glutine', spicy: false, vegetarian: false },

  { id: '46', name: 'Insalata Verde', price: '€4.50', ingredients: 'Lattuga, olio, sale', allergens: 'Nessuno', spicy: false, vegetarian: true },
  { id: '47', name: 'Insalata Pomodori', price: '€5.00', ingredients: 'Pomodori, olio, sale, origano', allergens: 'Nessuno', spicy: false, vegetarian: true },
  { id: '48', name: 'Insalata Tonno', price: '€6.50', ingredients: 'Tonno, lattuga, pomodori, cipolla, olio', allergens: 'Pesce', spicy: false, vegetarian: false },
  { id: '49', name: 'Insalata Mista', price: '€6.50', ingredients: 'Lattuga, pomodori, carote, cipolla, mais, olio', allergens: 'Nessuno', spicy: false, vegetarian: true },
  { id: '50', name: 'Insalata Greca', price: '€7.00', ingredients: 'Lattuga, pomodori, cipolla, olive, feta, origano, olio', allergens: 'Latte', spicy: false, vegetarian: true },
  { id: '51', name: 'Insalata Cesar', price: '€7.50', ingredients: 'Lattuga, pollo, parmigiano, crostini, salsa cesar', allergens: 'Latte, Glutine', spicy: false, vegetarian: false },

  { id: '52', name: 'Panino Classico', price: '€4.50', ingredients: 'Pane, prosciutto cotto, formaggio', allergens: 'Latte, Glutine', spicy: false, vegetarian: false },
  { id: '53', name: 'Panino Vegetariano', price: '€5.00', ingredients: 'Pane, verdure grigliate, formaggio', allergens: 'Latte, Glutine', spicy: false, vegetarian: true },
  { id: '54', name: 'Panino Crudo e Mozzarella', price: '€5.50', ingredients: 'Pane, prosciutto crudo, mozzarella', allergens: 'Latte, Glutine', spicy: false, vegetarian: false },
  { id: '55', name: 'Panino Tonno', price: '€5.50', ingredients: 'Pane, tonno, pomodori', allergens: 'Pesce, Glutine', spicy: false, vegetarian: false },
  { id: '56', name: 'Panino Bresaola e Rucola', price: '€6.00', ingredients: 'Pane, bresaola, rucola, formaggio', allergens: 'Latte, Glutine', spicy: false, vegetarian: false },
];

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartModalVisible, setCartModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [detailsModalVisible, setDetailsModalVisible] = useState(false);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (item) => {
    const updatedCartItems = cartItems.filter(cartItem => cartItem.id !== item.id);
    setCartItems(updatedCartItems);
  };

  const toggleCartModal = () => {
    setCartModalVisible(!cartModalVisible);
  };

  const toggleDetailsModal = () => {
    setDetailsModalVisible(!detailsModalVisible);
  };

  const renderCartItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Text style={styles.cartItemText}>{item.name} - {item.price}</Text>
      <TouchableOpacity onPress={() => removeFromCart(item)}>
        <Text style={styles.removeButton}>Rimuovi</Text>
      </TouchableOpacity>
    </View>
  );

  const renderMenuItem = ({ item }) => (
    <TouchableOpacity style={styles.menuItem} onPress={() => {
      setSelectedItem(item);
      toggleDetailsModal();
    }}>
      <Text style={styles.menuItemText}>{item.name}</Text>
      <Text style={styles.menuItemPrice}>{item.price}</Text>
      <TouchableOpacity style={styles.addButton} onPress={() => addToCart(item)}>
        <Text style={styles.addButtonText}>Aggiungi</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  const renderDetailsModal = () => {
    if (!selectedItem) return null;

    return (
      <Modal
        visible={detailsModalVisible}
        animationType="slide"
        onRequestClose={toggleDetailsModal}
      >
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>{selectedItem.name}</Text>
          <Text style={styles.modalText}>Ingredienti: {selectedItem.ingredients}</Text>
          <Text style={styles.modalText}>Allergeni: {selectedItem.allergens}</Text>
          <Text style={styles.modalText}>Vegetariano: {selectedItem.vegetarian ? 'Sì' : 'No'}</Text>
          <Text style={styles.modalText}>Piccante: {selectedItem.spicy ? 'Sì' : 'No'}</Text>
          <TouchableOpacity onPress={toggleDetailsModal} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Chiudi</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  };

  const renderCartModal = () => (
    <Modal
      visible={cartModalVisible}
      animationType="slide"
      onRequestClose={toggleCartModal}
    >
      <View style={styles.modalContent}>
        <Text style={styles.modalTitle}>Carrello</Text>
        {cartItems.length > 0 ? (
          <FlatList
            data={cartItems}
            renderItem={renderCartItem}
            keyExtractor={item => item.id}
          />
        ) : (
          <Text style={styles.modalText}>Il carrello è vuoto.</Text>
        )}
        <TouchableOpacity onPress={toggleCartModal} style={styles.closeButton}>
          <Text style={styles.closeButtonText}>Chiudi</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menù</Text>
      <FlatList
        data={articoli}
        renderItem={renderMenuItem}
        keyExtractor={item => item.id}
        numColumns={2}
      />
      <FAB
        style={styles.fab}
        small
        icon="cart"
        color="white"
        onPress={toggleCartModal}
      />
      {renderCartModal()}
      {renderDetailsModal()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  title: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  menuItem: {
    width: itemWidth,
    padding: 10,
    margin: 5,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  menuItemText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  menuItemPrice: {
    fontSize: 14,
    color: '#000',
    marginBottom: 10,
  },
  addButton: {
    padding: 5,
    backgroundColor: 'black',
    borderRadius: 5,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  cart: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    color: 'white',
    backgroundColor: 'black',
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  cartItemText: {
    fontSize: 16,
    color: '#000',
  },
  removeButton: {
    color: '#ff0000',
  },
  modalContent: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  modalText: {
    fontSize: 16,
    color: '#000',
    marginBottom: 10,
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'black',
    borderRadius: 5,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: 'black',
  },
});

export default App;