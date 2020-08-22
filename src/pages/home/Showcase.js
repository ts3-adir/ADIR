import React, {useContext} from 'react';
import {Text} from 'react-native';
import {DataContext} from '../welcome/welcome'

const Showcase = () => {
  const categories = useContext(DataContext)
  console.log('xxx', categories)
  return (
    <>
      <Text> Tes  </Text>
      <Text> Tes  </Text>
    </>
  );
};


Showcase.propTypes = {};
export default Showcase;
