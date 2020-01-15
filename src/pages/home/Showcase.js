import React, {useContext} from 'react';
import {Text} from 'react-native';
import {DataContext} from '../welcome/welcome'

const Showcase = () => {
  const categories = useContext(DataContext)
  console.log('categories log', categories)
  return (
    <>
      <Text> Teste 123 </Text>
    </>
  );
};


Showcase.propTypes = {};
export default Showcase;
