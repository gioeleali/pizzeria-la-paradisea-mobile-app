import React from 'react';
import Home from './components/App';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet, View } from 'react-native';

function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Home/>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;