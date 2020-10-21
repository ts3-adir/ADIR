import React, {useContext} from 'react';
import {Text, ScrollView} from 'react-native';
import {DataContext} from '../welcome/welcome'

const Showcase = () => {
  const categories = useContext(DataContext)

  return (
    <>
      <ScrollView>
        <Text> te este 555  </Text>
      </ScrollView>
    </>
  );
};


Showcase.propTypes = {};
export default Showcase;
