import React, {useContext} from 'react';
import {Text, ScrollView} from 'react-native';
import {DataContext} from '../welcome/welcome'

const Showcase = () => {
  const categories = useContext(DataContext)

  return (
    <>
      <ScrollView>
        <Text> te este valor 22 23</Text>
        <Text> te este 66 69 </Text>
      </ScrollView>
      <Text> te este 55 666 </Text>
    </>
  );
};


Showcase.propTypes = {};
export default Showcase;
