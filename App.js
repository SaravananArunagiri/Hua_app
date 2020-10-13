/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Stack from './Src/Navigation/Stack'
import {ShowtimeContextProvider} from './Src/ContextStore/Store'
const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Stack/>
    
    </>
  );
};

export default App