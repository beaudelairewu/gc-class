import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';

export default function App() {
  const press = () =>{
    console.log("pressed")
  }
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text onPress={press()}>HI THERE, THIS IS beam!!!!</Text>
      <Text>HI</Text>
      <Image source={{
        width:200,
        height:200,
        uri: "https://media.istockphoto.com/photos/hand-holding-mobile-phone-on-white-picture-id936722632"
      }}/>
      <StatusBar style="auto" />
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
