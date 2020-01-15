/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ImageBackground,
} from 'react-native';

import AppNavigator from './src/services/routes/routes';
import {ApolloProvider} from 'react-apollo';
import {apolloClient} from './src/services/api/endpoint';

const App = () => (
  <ApolloProvider client={apolloClient}>
    <AppNavigator />
  </ApolloProvider>
);

export default App;
