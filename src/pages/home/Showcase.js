import React, {useContext} from 'react';
import {Text} from 'react-native';
import {DataContext} from '../welcome/welcome'

const Showcase = () => {
  const categories = useContext(DataContext)

  return (
    <>
      <Text> te este 555  </Text>
    </>
  );
};


Showcase.propTypes = {};
export default Showcase;
