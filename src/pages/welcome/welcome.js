import React, {useEffect, createContext} from 'react';
import {StyleSheet, View, ImageBackground, Button, Text} from 'react-native';
import {useQuery} from '@apollo/react-hooks';
import {PRODUCTS, showCase} from '../../services/api/showcase';

import welcomeSplash from '../../assets/splash.jpeg';

export let DataContext = createContext(null);

const Welcome = ({navigation}) => {
  const loadData = useQuery(PRODUCTS, {
    variables: {
      id: '532',
      search: '',
      categoryId: null,
    },
  });
  const navigateToShowcase = () => navigation.navigate('Showcase');

  console.log('data', loadData);

  return (
    <>
      <View>
        <ImageBackground style={styles.container} source={welcomeSplash} />
        <Button title="Next Screen" onPress={navigateToShowcase} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 420,
    height: 910,
  },
});

export default Welcome;
