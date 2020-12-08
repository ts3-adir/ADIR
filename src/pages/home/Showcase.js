import React, {useContext} from 'react';
import {Text} from 'react-native';
import {DataContext} from '../welcome/welcome'

const Showcase = () => {
  const categories = useContext(DataContext)

  return (
    <>
      <Text> te este 65 65 </Text>
      <Text> te este 66 69 </Text>
    </>
  );
};


Showcase.propTypes = {};
export default Showcase;
