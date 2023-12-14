import { Text, Card, Avatar, Button, IconButton } from 'react-native-paper';
import { View, StyleSheet, Linking, Dimensions } from 'react-native';
import MapView, { Marker, MarkerIcon } from '@splicer97/react-native-osmdroid';

const Info = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Informazioni</Text>
      <Card style={styles.card}>
        <Card.Cover style={styles.cover} source={require('../assets/png/home.webp')} />
        <Card.Title title="Bombolò" titleStyle={styles.titleText} subtitle="Pasticceria" subtitleStyle={styles.subtitleText}/>
        <Card.Content>
          <Text style={styles.description}>
            <Text style={styles.bold}>Martedì</Text>: 16:30 – 01:00
            {'\n'}
            <Text style={styles.bold}>Mercoledì</Text>: 16:30 – 01:00
            {'\n'}
            <Text style={styles.bold}>Giovedì</Text>: 16:30 – 01:00
            {'\n'}
            <Text style={styles.bold}>Venerdì</Text>: 16:30 – 02:00
            {'\n'}
            <Text style={styles.bold}>Sabato</Text>: 16:30 – 02:00
            {'\n'}
            <Text style={styles.bold}>Domenica</Text>: 16:30 – 01:00
            {'\n'}
            <Text style={styles.bold}>Chiuso il Lunedì</Text>
            {'\n'}
          </Text>
          <Text style={styles.subtitleText}>📍Piazza Garibaldi, 14, 56126 Pisa PI</Text>
          <View style={styles.mapContainer}>
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: 43.71648894384868,
                longitude: 10.402039918740353,
                latitudeDelta: 0.004,
                longitudeDelta: 0.004,
              }}
            >
              <Marker
                coordinate={{ latitude: 43.71648894384868, longitude: 10.402039918740353 }}
                title={"Bombolò"}
                description={"Bomboleria"}
                image={require('../assets/png/marker.png')}
              />
            </MapView>
          </View>
          <View style={styles.contactIcons}>
            <IconButton
              icon="email"
              color="#007AFF"
              size={30}
              onPress={() => Linking.openURL('mailto:gioeleali2001@gmail.com')}
            />
            <IconButton
              icon="whatsapp"
              color="#25D366"
              size={30}
              onPress={() => Linking.openURL('https://api.whatsapp.com/send?phone=393426685681&text=Ciao%20Gioele!%20Ho%20visto%20la%20tua%20app%20e%20volevo%20farti%20i%20complimenti!')}
            />
            <IconButton
              icon="phone"
              color="#007AFF"
              size={30}
              onPress={() => Linking.openURL('tel:+393426685681')}
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
  link: {
    textDecorationLine: 'underline',
    color: 'blue',
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