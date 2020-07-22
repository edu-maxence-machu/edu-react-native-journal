import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, SafeAreaView, ScrollView } from 'react-native';
import Header from './components/Header'
import Journal from './pages/Journal'
import BankAccount from './pages/BankAccount'

export default function App() {

  const dataJournal = [
    {
      title: 'Faire les courses',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      done: true
    },
    {
      title: 'Sortir les poubelles',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
      done: false
    },
    {
      title: 'Donner à manger au chien',
      description: "Consectetur adipiscing elit",
      done: true
    }
  ]

  const [page, setPage] = useState('BankAccount');
  
  function navigate(page){
    setPage(page)
  }

  return (
    <SafeAreaView style={styles.container}>

      <Header title={page}/>

      { page === 'Journal' && <Journal data={dataJournal}/> }

      { page === 'BankAccount' && <BankAccount />}
      
      <View style={styles.topMenu}>
        <Button 
          title="Bank" 
          color={page === "BankAccount" ? "green" : 'grey'}
          onPress={() => navigate('BankAccount')}
          />
        <Button 
          title="Journal" 
          color={page === "Journal" ? 'green' : 'grey'}
          onPress={() => navigate('Journal')}

          />
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  topMenu: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});
