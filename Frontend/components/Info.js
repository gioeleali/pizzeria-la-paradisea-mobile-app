import React from 'react';
import { Text, Card, Avatar, Button } from 'react-native-paper';
import { View, StyleSheet, Linking, Dimensions } from 'react-native';
import MapView, { Marker } from '@splicer97/react-native-osmdroid';

const Info = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Informazioni</Text>
      <Card style={styles.card}>
        <Card.Title title="Bombolò" titleStyle={styles.titleText} subtitle="Bomboleria" subtitleStyle={styles.subtitleText}/>
        <Card.Content>
          <Text style={styles.description}>
            <Text style={styles.bold}>Mercoledì</Text>: 16:30–01
            {'\n'}
            <Text style={styles.bold}>Giovedì</Text>: 16:30–01
            {'\n'}
            <Text style={styles.bold}>Venerdì</Text>: 16:30–02
            {'\n'}
            <Text style={styles.bold}>Sabato</Text>: 16:30–02
            {'\n'}
            <Text style={styles.bold}>Domenica</Text>: 16:30–01
            {'\n'}
            <Text style={styles.bold}>Lunedì</Text>: Chiuso
            {'\n'}
            <Text style={styles.bold}>Martedì</Text>: 16:30–01
          </Text>
        </Card.Content>
        <Card.Cover style={styles.cover} source={require('../assets/png/home.webp')} />
      </Card>
      <View>
        <MapView
        style={styles.map}
        initialRegion={{
          latitude: 43.7228,
          longitude: 10.4017,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{ latitude: 43.71648894384868, longitude: 10.402039918740353 }}
          title={"Bombolò"}
          description={"Bomboleria"}
        />
      </MapView>
      </View>
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
  title: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    textAlign: 'left',
  },
  card: {
    width: '100%',
    backgroundColor: 'ghostwhite'
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitleText: {
    fontSize: 16,
    fontWeight: '600',
  },
  cover: {
    resizeMode: 'cover',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    paddingTop: 20,
    backgroundColor: 'ghostwhite',
  },
  bold: {
    fontWeight: 'bold',
  },
  link: {
    textDecorationLine: 'underline',
    color: 'blue',
  },
  map: {
    width: '100%',
    height: 200,
    borderRadius: 20,
  },
});

export default Info;