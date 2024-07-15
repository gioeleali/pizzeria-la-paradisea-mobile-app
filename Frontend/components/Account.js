import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';

const Account = () => {
  const userData = {
    nome: 'Mario',
    cognome: 'Rossi',
    username: '@mariorossi',
    telefono: '+39 342 6685681',
    dateOfBirth: '24 Nov',
    profileImage: 'https://tse1.mm.bing.net/th?q=blank%20user%20profile',
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Image source={{ uri: userData.profileImage }} style={styles.profileImage} />
          <View style={styles.headerText}>
            <Text style={styles.name}>{userData.nome} {userData.cognome}</Text>
            <Text style={styles.username}>{userData.username}</Text>
          </View>
        </View>
        <Card style={styles.card}>
          <Card.Content>
            <View style={styles.infoSection}>
              <Text style={styles.infoLabel}>Cellulare</Text>
              <Text style={styles.infoValue}>{userData.telefono}</Text>
            </View>
            <View style={styles.infoSection}>
              <Text style={styles.infoLabel}>Data di nascita</Text>
              <Text style={styles.infoValue}>{userData.dateOfBirth}</Text>
            </View>
          </Card.Content>
        </Card>
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
  username: {
    fontSize: 18,
    color: '#555555',
  },
  card: {
    backgroundColor: '#F8F8F8',
    borderRadius: 8,
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
});

export default Account;
