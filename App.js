import {StatusBar, StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import InshortsTab from './src/Home/InshortsTab';
import NavigationContainer from './src/Screens/NavigationContainer';

export default function App() {
  return <NavigationContainer />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: 'white',
  },
});
