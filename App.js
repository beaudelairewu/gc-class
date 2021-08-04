import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import ShopComponent from './components/ShopComponent';

export default function App() {
  
  return (
    <View style={styles.container}>
      <ShopComponent/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
