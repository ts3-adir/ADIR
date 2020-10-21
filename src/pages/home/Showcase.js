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
      <Text> te este 55 666 </Text>
    </>
  );
};


Showcase.propTypes = {};
export default Showcase;
