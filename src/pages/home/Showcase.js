import React, {useContext} from 'react';
import {Text} from 'react-native';
import {DataContext} from '../welcome/welcome'

const Showcase = () => {
  const categories = useContext(DataContext)

  return (
    <>
      <Text> Hahaha  </Text>
      <Text> Hahaha  </Text>
      <Text> Hahaha  </Text>
      <Text> Hahaha  </Text>
      <Text> Hahaha  </Text>
      <Text> Hahaha  </Text>
      <Text> Hahaha  </Text>
      <Text> Hahaha  </Text>
      <Text> Hahaha  </Text>
      <Text> Hahaha  </Text>
      <Text> Hahaha  </Text>
    </>
  );
};


Showcase.propTypes = {};
export default Showcase;
