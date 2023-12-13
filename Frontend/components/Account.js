import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';

const Account = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    nome: 'Mario',
    cognome: 'Rossi',
    email: 'mario.rossi@example.com',
    password: '************',
    profileImage: 'https://w0.peakpx.com/wallpaper/979/89/HD-wallpaper-purple-smile-design-eye-smily-profile-pic-face.jpg',
  });

  const handleNameChange = (newName) => {
    setUserData((prevData) => ({ ...prevData, nome: newName }));
  };

  const handleSurnameChange = (newSurname) => {
    setUserData((prevData) => ({ ...prevData, cognome: newSurname }));
  };

  const handleEmailChange = (newEmail) => {
    setUserData((prevData) => ({ ...prevData, email: newEmail }));
  };

  const handlePasswordChange = (newPassword) => {
    setUserData((prevData) => ({ ...prevData, password: newPassword }));
  };

  const startEditing = () => {
    setIsEditing(true);
  };

  const saveChanges = () => {
    // Qui puoi implementare la logica per salvare le modifiche sul server o nel tuo sistema
    console.log('Modifiche salvate:', userData);
    setIsEditing(false);
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Account</Text>

      <View style={styles.profileImageContainer}>
        <Image source={{ uri: userData.profileImage }} style={styles.profileImage} />
      </View>

      <View style={styles.userInfo}>
        <Text style={styles.label}>Nome:</Text>
        {isEditing ? (
          <TextInput
            style={styles.input}
            value={userData.nome}
            onChangeText={handleNameChange}
          />
        ) : (
          <Text style={styles.value}>{userData.nome}</Text>
        )}
      </View>

      <View style={styles.userInfo}>
        <Text style={styles.label}>Cognome:</Text>
        {isEditing ? (
          <TextInput
            style={styles.input}
            value={userData.cognome}
            onChangeText={handleSurnameChange}
          />
        ) : (
          <Text style={styles.value}>{userData.cognome}</Text>
        )}
      </View>

      <View style={styles.userInfo}>
        <Text style={styles.label}>Email:</Text>
        {isEditing ? (
          <TextInput
            style={styles.input}
            value={userData.email}
            onChangeText={handleEmailChange}
          />
        ) : (
          <Text style={styles.value}>{userData.email}</Text>
        )}
      </View>

      <View style={styles.userInfo}>
        <Text style={styles.label}>Password:</Text>
        {isEditing ? (
          <TextInput
            style={styles.input}
            value={userData.password}
            onChangeText={handlePasswordChange}
          />
        ) : (
          <Text style={styles.value}>{userData.password}</Text>
        )}
      </View>

      {isEditing ? (
        <TouchableOpacity style={styles.saveButton} onPress={saveChanges}>
          <Text style={styles.saveButtonText}>Salva Modifiche</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.editButton} onPress={startEditing}>
          <Text style={styles.editButtonText}>Modifica</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 3,
    padding: 16,
    margin: 16,
    alignItems: 'center',
  },
  title: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  profileImageContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  userInfo: {
    marginBottom: 16,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'black',
  },
  value: {
    fontSize: 16,
    color: 'black',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 8,
    padding: 8,
  },
  saveButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  saveButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  editButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  editButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Account;