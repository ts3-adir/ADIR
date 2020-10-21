import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, Image} from 'react-native';
import getOptimizedUrl, {FIT} from 'services/image';

import {styles} from './styles';

const ImageCard = ({image, onPress, accessibilityLabel}) => (
  <TouchableOpacity
    accessibilityLabel={accessibilityLabel}
    style={[styles.product, { paddingLeft: 0, marginRight: 0 }]}
    activeOpacity={0.6}
>
    <Image
      style={styles.image}
      source={{
        uri: getOptimizedUrl(image, {
          width: styles.image.width,
          height: styles.image.height,
          fit: FIT.CROP,
        }),
      }}
    />
        <Image
      style={styles.image}
      source={{
        uri: getOptimizedUrl(image, {
          width: styles.image.width,
          height: styles.image.height,
          fit: FIT.CROP,
        }),
      }}
    />
  </TouchableOpacity>
)
ImageCard.propTypes = {
  image: PropTypes.shape.isRequired,
  onPress: PropTypes.func.isRequired,
  accessibilityLabel: PropTypes.string.isRequired,
}
export default ImageCard