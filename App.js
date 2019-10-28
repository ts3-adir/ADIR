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
 
import welcomeSplash from './src/assets/splash.jpeg'


const App: () => React$Node = () => {
  return (
    <>
      <View>
        <ImageBackground style={styles.container} source={welcomeSplash} />
        <Text> Thiago </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 420,
    height: 900,
  },
});

export default App;
