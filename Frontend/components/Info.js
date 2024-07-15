import { Text, Card, Avatar, Button, IconButton } from 'react-native-paper';
import { View, StyleSheet, Linking, Dimensions } from 'react-native';
import MapView, { Marker, MarkerIcon } from '@splicer97/react-native-osmdroid';

const Info = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Informazioni</Text>
      <Card style={styles.card}>
        <Card.Cover style={styles.cover} source={require('../assets/png/home.png')} />
        <Card.Title title="🍕Pizzeria La Paradisea" titleStyle={styles.titleText}/>
        <Card.Content>
          <Text style={styles.description}>Focacce, insalate e pizze, anche da asporto, proposte tra arredi curati in un locale dal clima informale.{'\n'}</Text>
          <Text style={styles.description}>
            <Text style={styles.bold}>Lunedì</Text>: 17:30 – 23:00
            {'\n'}
            <Text style={styles.bold}>Chiuso il Martedì</Text>
            {'\n'}
            <Text style={styles.bold}>Mercoledì</Text>: 17:30 – 23:00
            {'\n'}
            <Text style={styles.bold}>Giovedì</Text>: 17:30 – 23:00
            {'\n'}
            <Text style={styles.bold}>Venerdì</Text>: 17:30 – 23:00
            {'\n'}
            <Text style={styles.bold}>Sabato</Text>: 17:30 – 23:00
            {'\n'}
            <Text style={styles.bold}>Domenica</Text>: 17:30 – 23:00
            {'\n'}
          </Text>
          <View style={styles.mapContainer}>
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: 43.703310,
                longitude: 10.404110,
                latitudeDelta: 0.004,
                longitudeDelta: 0.004,
              }}
            >
              <Marker
                coordinate={{ latitude: 43.703310, longitude: 10.404110 }}
                title={"Pizzeria La Paradisea"}
                description={"Pizzeria"}
                image={require('../assets/png/marker.png')}
              />
            </MapView>
          </View>
          <View style={styles.contactIcons}>
            <IconButton
              icon="phone"
              color="#007AFF"
              size={30}
              onPress={() => Linking.openURL('tel:+39050500040')}
            />
            <IconButton
              icon="web"
              color="#007AFF"
              size={30}
              onPress={() => Linking.openURL('https://www.pizzerialaparadisea.it/')}
            />
            <IconButton
              icon="map"
              color="#007AFF"
              size={30}
              onPress={() => Linking.openURL('https://maps.app.goo.gl/ajHp3QyhgDPn6MRZA')}
            />
            <IconButton
              icon="email"
              color="#007AFF"
              size={30}
              onPress={() => Linking.openURL('mailto:laparadisea@yahoo.it')}
            />
          </View>
        </Card.Content>
      </Card>
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
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor: 'ghostwhite',
    height: 65,
  },
  bold: {
    fontWeight: 'bold',
  },
  mapContainer: {
    position: 'relative',
    height: 200,
    borderRadius: 5,
    overflow: 'hidden',
  },
  map: {
    flex: 1,
    borderRadius: 20,
  },
  contactIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
  },
});

export default Info;