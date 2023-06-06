/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import { extendTheme, NativeBaseProvider, Text,Box } from "native-base";
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import Navigation from './src/navigation';

const newColorTheme = {
  brand: {
    900: "#8287af",
    800: "#7c83db",
    700: "#b3bef6",
  },
};
const theme = extendTheme({ colors: newColorTheme });

function App(): JSX.Element {
  return (
    <NativeBaseProvider theme={theme}>
    <SafeAreaView style={styles.root}>
   
      <Navigation />
    </SafeAreaView>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  root:{
    flex: 1,
    backgroundColor: '#F9FBFC',
  }
});

export default App;
