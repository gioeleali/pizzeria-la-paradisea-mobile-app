import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { Card } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

const GenderPicker = ({ value, onChange }) => {
  return (
    <View style={styles.input}>
      <Picker
        style={{ flex: 1 }}
        selectedValue={value}
        onValueChange={(itemValue) => onChange(itemValue)}
      >
        <Picker.Item label="Male" value="Male" />
        <Picker.Item label="Female" value="Female" />
        <Picker.Item label="Agender" value="Agender" />
        <Picker.Item label="Abimegender" value="Abimegender" />
        <Picker.Item label="Adamas gender" value="Adamas gender" />
        <Picker.Item label="Aerogender" value="Aerogender" />
        <Picker.Item label="Aesthetigender" value="Aesthetigender" />
        <Picker.Item label="Affectugender" value="Affectugender" />
        <Picker.Item label="Agenderflux" value="Agenderflux" />
        <Picker.Item label="Alexigender" value="Alexigender" />
        <Picker.Item label="Aliusgender" value="Aliusgender" />
        <Picker.Item label="Amaregender" value="Amaregender" />
        <Picker.Item label="Ambigender" value="Ambigender" />
        <Picker.Item label="Ambonec" value="Ambonec" />
        <Picker.Item label="Amicagender" value="Amicagender" />
        <Picker.Item label="Androgyne" value="Androgyne" />
        <Picker.Item label="Anesigender" value="Anesigender" />
        <Picker.Item label="Angenital" value="Angenital" />
        <Picker.Item label="Anogender" value="Anogender" />
        <Picker.Item label="Anongender" value="Anongender" />
        <Picker.Item label="Antegender" value="Antegender" />
        <Picker.Item label="Anxiegender" value="Anxiegender" />
        <Picker.Item label="Apagender" value="Apagender" />
        <Picker.Item label="Apconsugender" value="Apconsugender" />
        <Picker.Item label="Astergender" value="Astergender" />
        <Picker.Item label="Astralgender" value="Astralgender" />
        <Picker.Item label="Autigender" value="Autigender" />
        <Picker.Item label="Autogender" value="Autogender" />
        <Picker.Item label="Axigender" value="Axigender" />
        <Picker.Item label="Bigender" value="Bigender" />
        <Picker.Item label="Biogender" value="Biogender" />
        <Picker.Item label="Blurgender" value="Blurgender" />
        <Picker.Item label="Boyflux" value="Boyflux" />
        <Picker.Item label="Burstgender" value="Burstgender" />
        <Picker.Item label="Caelgender" value="Caelgender" />
        <Picker.Item label="Cassgender" value="Cassgender" />
        <Picker.Item label="Cassflux" value="Cassflux" />
        <Picker.Item label="Cavusgender" value="Cavusgender" />
        <Picker.Item label="Cendgender" value="Cendgender" />
        <Picker.Item label="Ceterogender" value="Ceterogender" />
        <Picker.Item label="Ceterofluid" value="Ceterofluid" />
        <Picker.Item label="Cisgender" value="Cisgender" />
        <Picker.Item label="Cloudgender" value="Cloudgender" />
        <Picker.Item label="Collgender" value="Collgender" />
        <Picker.Item label="Colorgender" value="Colorgender" />
        <Picker.Item label="Commogender" value="Commogender" />
        <Picker.Item label="Condigender" value="Condigender" />
        <Picker.Item label="Deliciagender" value="Deliciagender" />
        <Picker.Item label="Demifluid" value="Demifluid" />
        <Picker.Item label="Demiflux" value="Demiflux" />
        <Picker.Item label="Demigender" value="Demigender" />
        <Picker.Item label="Domgender" value="Domgender" />
        <Picker.Item label="Duragender" value="Duragender" />
        <Picker.Item label="Egogender" value="Egogender" />
        <Picker.Item label="Epicene" value="Epicene" />
        <Picker.Item label="Esspigender" value="Esspigender" />
        <Picker.Item label="Exgender" value="Exgender" />
        <Picker.Item label="Existigender" value="Existigender" />
        <Picker.Item label="Femfluid" value="Femfluid" />
        <Picker.Item label="Femgender" value="Femgender" />
        <Picker.Item label="Fluidflux" value="Fluidflux" />
        <Picker.Item label="Gemigender" value="Gemigender" />
        <Picker.Item label="Genderblank" value="Genderblank" />
        <Picker.Item label="Genderflow" value="Genderflow" />
        <Picker.Item label="Genderfluid" value="Genderfluid" />
        <Picker.Item label="Genderfuzz" value="Genderfuzz" />
        <Picker.Item label="Genderflux" value="Genderflux" />
        <Picker.Item label="Genderpuck" value="Genderpuck" />
        <Picker.Item label="Genderqueer" value="Genderqueer" />
        <Picker.Item label="Witchgender" value="Witchgender" />
        <Picker.Item label="Girlflux" value="Girlflux" />
        <Picker.Item label="Healgender" value="Healgender" />
        <Picker.Item label="Mirrorgender" value="Mirrorgender" />
        <Picker.Item label="Omnigender" value="Omnigender" />
        <Picker.Item label="Elicopter" value="Elicopter" />
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
    genere: 'Maschio',
    dateOfBirth: new Date(),
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

  const handleDateOfBirthChange = (event, date) => {
    setShowDatePicker(false);
    if (date) {
      setUserData((prevData) => ({ ...prevData, dateOfBirth: date }));
    }
  };

  const handleGenderChange = (gender) => {
    setUserData((prevData) => ({ ...prevData, genere: gender }));
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
        <Card.Content style={styles.content}>
          <View style={styles.leftContent}>
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
            <View style={styles.userInfo}>
              <Text style={styles.label}>Date of Birth:</Text>
              {isEditing ? (
                <TouchableOpacity onPress={() => setShowDatePicker(true)}>
                  <Text style={styles.value}>{userData.dateOfBirth.toDateString()}</Text>
                </TouchableOpacity>
              ) : (
                <Text style={styles.value}>{userData.dateOfBirth.toDateString()}</Text>
              )}
              {showDatePicker && (
                <DateTimePicker
                  value={userData.dateOfBirth}
                  mode="date"
                  display="spinner"
                  onChange={handleDateOfBirthChange}
                />
              )}
            </View>
            <View style={styles.userInfo}>
              <Text style={styles.label}>Genere:</Text>
              {isEditing ? (
                <GenderPicker value={userData.genere} onChange={handleGenderChange} />
              ) : (
                <Text style={styles.value}>{userData.genere}</Text>
              )}
            </View>
          </View>
          <View style={styles.rightContent}>
            <View style={styles.profileImageContainer}>
              <Image source={{ uri: userData.profileImage }} style={styles.profileImage} />
            </View>
          </View>
        </Card.Content>
        {isEditing ? (
          <Card.Actions>
            <TouchableOpacity style={styles.saveButton} onPress={saveChanges}>
              <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
          </Card.Actions>
        ) : (
          <Card.Actions>
            <TouchableOpacity style={styles.editButton} onPress={startEditing}>
              <Text style={styles.editButtonText}>Edit</Text>
            </TouchableOpacity>
          </Card.Actions>
        )}
      </Card>
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
  card: {
    width: '100%',
    backgroundColor: 'ghostwhite'
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
    alignItems: 'left',
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
    height: 60,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 8,
    padding: 8,
  },
  saveButton: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  saveButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  editButton: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    alignContent: 'center',
  },
  editButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftContent: {
    flex: 1,
    paddingRight: 16,
  },
  rightContent: {
    alignItems: 'flex-end',
  },
});

export default Account;
