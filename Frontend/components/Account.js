import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Card, Button } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

const GenderPicker = ({ value, onChange }) => {
  return (
    <View style={styles.pickerContainer}>
      <Picker
        style={styles.picker}
        selectedValue={value}
        onValueChange={(itemValue) => onChange(itemValue)}
      >
        <Picker.Item label="Male" value="Male" />
        <Picker.Item label="Female" value="Female" />
        <Picker.Item label="Agender" value="Agender" />
        <Picker.Item label="Bigender" value="Bigender" />
        <Picker.Item label="Genderfluid" value="Genderfluid" />
        <Picker.Item label="Genderqueer" value="Genderqueer" />
        <Picker.Item label="Non-binary" value="Non-binary" />
        <Picker.Item label="Other" value="Other" />
      </Picker>
    </View>
  );
};

const Account = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [userData, setUserData] = useState({
    nome: 'Mario',
    cognome: 'Rossi',
    email: 'mario.rossi@example.com',
    password: 'psw',
    genere: 'Male',
    dateOfBirth: new Date(),
    profileImage: 'https://tse1.mm.bing.net/th?q=blank%20user%20profile',
  });

  const handleInputChange = (key, value) => {
    setUserData((prevData) => ({ ...prevData, [key]: value }));
  };

  const handleDateOfBirthChange = (event, date) => {
    setShowDatePicker(false);
    if (date) {
      handleInputChange('dateOfBirth', date);
    }
  };

  const startEditing = () => {
    setIsEditing(true);
  };

  const saveChanges = () => {
    console.log('Modifiche salvate:', userData);
    setIsEditing(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Account</Text>
      <Card style={styles.card}>
        <Card.Content>
          <ScrollView contentContainerStyle={styles.scrollContent}>
            <View style={styles.profileSection}>
              <TouchableOpacity onPress={() => {/* Funzione per cambiare immagine */}}>
                <Image source={{ uri: userData.profileImage }} style={styles.profileImage} />
              </TouchableOpacity>
            </View>
            <View style={styles.detailsSection}>
              {[
                { label: 'Nome', key: 'nome' },
                { label: 'Cognome', key: 'cognome' },
                { label: 'Email', key: 'email' },
                { label: 'Password', key: 'password' },
                { label: 'Date of Birth', key: 'dateOfBirth' },
                { label: 'Genere', key: 'genere' },
              ].map((item) => (
                <View key={item.key} style={styles.userInfo}>
                  <Text style={styles.label}>{item.label}:</Text>
                  {isEditing ? (
                    item.key === 'dateOfBirth' ? (
                      <TouchableOpacity onPress={() => setShowDatePicker(true)}>
                        <TextInput
                          style={styles.input}
                          editable={false}
                          value={userData.dateOfBirth.toDateString()}
                        />
                      </TouchableOpacity>
                    ) : item.key === 'genere' ? (
                      <GenderPicker
                        value={userData.genere}
                        onChange={(value) => handleInputChange('genere', value)}
                      />
                    ) : (
                      <TextInput
                        style={styles.input}
                        value={userData[item.key]}
                        onChangeText={(value) => handleInputChange(item.key, value)}
                      />
                    )
                  ) : (
                    <Text style={styles.value}>
                      {item.key === 'dateOfBirth'
                        ? userData.dateOfBirth.toDateString()
                        : userData[item.key]}
                    </Text>
                  )}
                </View>
              ))}
              {showDatePicker && (
                <DateTimePicker
                  value={userData.dateOfBirth}
                  mode="date"
                  display="spinner"
                  onChange={handleDateOfBirthChange}
                />
              )}
            </View>
          </ScrollView>
        </Card.Content>
        <Card.Actions>
          {isEditing ? (
            <Button mode="contained" onPress={saveChanges} style={styles.button}>
              Save
            </Button>
          ) : (
            <Button mode="contained" onPress={startEditing} style={styles.button}>
              Edit
            </Button>
          )}
        </Card.Actions>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF', // Sfondo bianco
    flex: 1,
    padding: 16,
  },
  title: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  card: {
    width: '100%',
    backgroundColor: '#F8F8F8', // Sfondo chiaro della card
    borderRadius: 8,
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  profileSection: {
    alignItems: 'center',
    marginVertical: 16,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  detailsSection: {
    marginTop: 16,
  },
  userInfo: {
    marginBottom: 12,
  },
  label: {
    fontSize: 16,
    color: '#000000', // Testo nero
    marginBottom: 4,
  },
  value: {
    fontSize: 16,
    color: '#000000', // Testo nero
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#000000', // Bordo nero
    fontSize: 16,
    color: '#000000', // Testo nero
    paddingBottom: 4,
    marginBottom: 4,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#000000', // Bordo nero
    borderRadius: 4,
  },
  picker: {
    width: '100%',
    height: 44,
    color: '#000000', // Testo nero
    backgroundColor: '#F8F8F8', // Sfondo chiaro del picker
  },
  button: {
    backgroundColor: '#000000', // Sfondo nero del pulsante
  },
});

export default Account;
