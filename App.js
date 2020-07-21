import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function App() {

  /*
  CODE JS

  1. <Image/> dans le return
  2. tinyLogo dans "const styles = ..."
  3. Ajouter Image dans l'import
  */
  return (
    <View style={styles.container}>
      {/* CODE JSX */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Hello RIL CAEN !</Text>
      </View>

      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://akarah.com/img/logo-akarah.png',
        }}
      />

      <Button
        title="Clique ici !"
        color="#cccccc"
        accessibilityLabel="En savoir plus sur le cours de React"
      />

      <StatusBar style="auto" />
    </View>

  );
}

const styles = StyleSheet.create({
  header : {
      width: '100%',
      backgroundColor: 'orange',
      height: 50,
      alignItems: 'center',
      justifyContent:'center',
      paddingTop: 15,
      borderBottomColor: 'grey',
      borderBottomWidth: 1
    },
  headerText : {
      textAlign: 'center',
      fontWeight: 'bold'
  },
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  tinyLogo: {
    width: 300,
    height: 70,
  },
});
