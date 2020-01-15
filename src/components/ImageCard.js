import React, {useEffect, createContext} from 'react';
import {Image, TouchableOpacity, StyleSheet, ElevatedView, Text} from 'react-native';
import getOptimizedUrl, {FIT} from '../services/optimizer/image';
import styles from './style'


const ProductCard = ({
  product,
  elevation,
  onPressDelete,
}) => (
  <ElevatedView elevation={elevation} style={cardStyles.product}>
    <View
      style={hasProductCounter ? cardStyles.imageFullHeight : cardStyles.image}>
      <Image
        style={{
          width,
          height,
          margin: 8,
        }}
        source={{uri: getOptimizedUrl(product.image, {height, width})}}
      />
    </View>
    <View style={cardStyles.productInfo}>
      <View style={cardStyles.title}>
        <Text
          accessibilityLabel="product-card-title"
          numberOfLines={1}
          style={
            onPressDelete
              ? cardStyles.titleTextWithDeleteButton
              : cardStyles.titleText
          }>
          {product.title}
        </Text>
      </View>
      <View
        accessibilityLabel="product-card-price"
        style={cardStyles.priceText}>
        {product.discountValue ? (
          <Text strikeThrough style={cardStyles.discountedPrice}>
            {formatToCurrency(product.price)}
          </Text>
        ) : (
          <Text strikeThrough style={cardStyles.discountedPrice} />
        )}
      </View>
    </View>
  </ElevatedView>
);
ImageCard.propTypes = {
  image: PropTypes.shape.isRequired,
  onPress: PropTypes.func.isRequired,
  accessibilityLabel: PropTypes.string.isRequired,
};
export default ImageCard;
