import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';

const Account = () => {
  const userData = {
    nome: 'Mario',
    cognome: 'Rossi',
    profileImage: 'https://lirp.cdn-website.com/852c55b0/dms3rep/multi/opt/PIZZERIA+LA+PARADISEA-LOGO-400400-186w.jpg',
    ordiniInLavorazione: [
      { item: 'Pizza Napoletana', stato: 'In lavorazione 🔄' },
      { item: 'Pizza Rugiada', stato: 'In lavorazione 🔄' },
    ],
    ordiniCompletati: [],
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Account</Text>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Image source={{ uri: userData.profileImage }} style={styles.profileImage} />
          <View style={styles.headerText}>
            <Text style={styles.name}>{userData.nome} {userData.cognome}</Text>
            <Text style={styles.status}>Tavolo n.24🚩</Text>
          </View>
        </View>
        {userData.ordiniInLavorazione.map((ordine, index) => (
          <Card key={index} style={styles.card}>
            <Card.Content>
              <View style={styles.infoSection}>
                <Text style={styles.infoLabel}>{ordine.item}</Text>
                <Text style={styles.infoValue}>{ordine.stato}</Text>
              </View>
            </Card.Content>
          </Card>
        ))}
        <Text style={styles.status}>Ordini completati:</Text>
        {userData.ordiniCompletati.length === 0 ? (
          <Text style={styles.noOrders}>Nessun ordine completato</Text>
        ) : (
          userData.ordiniCompletati.map((ordine, index) => (
            <Card key={index} style={styles.card}>
              <Card.Content>
                <View style={styles.infoSection}>
                  <Text style={styles.infoLabel}>{ordine.item}</Text>
                  <Text style={styles.infoValue}>{ordine.stato}</Text>
                </View>
              </Card.Content>
            </Card>
          ))
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    padding: 16,
  },
  title: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  scrollContent: {
    flexGrow: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  headerText: {
    flex: 1,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
  },
  status: {
    fontSize: 18,
    color: '#555555',
    marginTop: 16,
    marginBottom: 8,
  },
  card: {
    backgroundColor: '#F8F8F8',
    borderRadius: 8,
    marginBottom: 16,
  },
  infoSection: {
    marginBottom: 16,
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 4,
  },
  infoValue: {
    fontSize: 16,
    color: '#000000',
  },
  noOrders: {
    fontSize: 16,
    color: '#555555',
    fontStyle: 'italic',
  },
});

export default Account;
