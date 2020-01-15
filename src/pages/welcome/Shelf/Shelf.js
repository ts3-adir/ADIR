import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import get from 'lodash/get'
import {View, StyleSheet, ScrollView, Image, Dimensions} from 'react-native';
import {
  cardType,
  productCardVisualizationsTypes,
  shelvesType,
} from 'services/constants';
import Text from 'components/Text'
import ProductCard from 'components/ProductCard'
import DataLayer from 'services/datalayer'
import Navigation from 'services/network/navigation'
import getOptimizedUrl, { FIT } from 'services/image'
import SeeAllButton from '../SeeAllButton'
import ImageCard from '../ImageCard'

import {styles} from './styles';

const bannerMinHeight = 112
const bannerMinWidth = 320
const bannerProportion = bannerMinHeight / bannerMinWidth
const { width } = Dimensions.get('window')

export const shelvesTypesConfig = Object.freeze({
  CATEGORY: {
    type: 'CATEGORY',
    showSeeAllbutton: true,
  },
  BRANDS: {
    type: 'BRANDS',
    showSeeAllbutton: false,
  },
  BRAND: {
    type: 'BRAND',
    showSeeAllbutton: true,
  },
  CUSTOM: {
    type: 'CUSTOM',
    showSeeAllbutton: false,
  },
  DEFAULT: {
    showSeeAllbutton: true,
  },
})

const Shelf = props => {
    const { type } = props.data

  setShelfConfigByType = type => {
    setState({
      config: shelvesTypesConfig[type] || shelvesTypesConfig.DEFAULT,
    })
  }

  getContainerSpaces = () => {
    const { data } = props
    const isCardImageType = get(data, 'items[0].type') === cardType.BRAND

    return {
      paddingBottom: 16,
      paddingRight: isCardImageType ? 16 : 0,
    }
  }

  getProduct = item => {
    const { data } = props

    return {
      id: item.id,
      shelfName: data.displayName,
      title: item.displayName,
      image: get(item, 'images[0]'),
      price: get(item, 'price.max'),
      discountValue: get(item, 'applicableDiscount.presentedDiscountValue'),
      discountType: get(item, 'applicableDiscount.discountType'),
      finalValue: get(item, 'applicableDiscount.finalValue'),
    }
  }

  navigateTo = () => {
    const { data } = props

    const params = {
      displayName: data.displayName,
      type: data.type,
      id: data.id,
    }

    DataLayer.trackNavigationClick(params.displayName)

    Navigation.navigate('Browse', params, params.id)
  }

  selectItem = (position, item, page) => {
    const { data } = props

    if (item.type === cardType.PRODUCT) {
      DataLayer.trackProductClicked(item, position, data.displayName)
    } else if (item.type === cardType.BRAND) {
      DataLayer.trackNavigationClick(item.displayName)
    }

    const params = {
      displayName: item.displayName,
      type: item.type,
      id: item.id,
      returnRoute: Navigation.getActiveRouteInfo(),
    }

    const pageKey = params.type === shelvesType.PRODUCT ? `${item.type}-${item.id}` : item.id

    Navigation.navigate(page, params, pageKey)
  }

  renderHeader = () => {
    const { data, singleList, bannerImage } = props
    const { displayName } = data

    return singleList && bannerImage ? (
      <Image
        style={styles.bannerImage}
        source={{ uri: getOptimizedUrl(bannerImage, { fit: FIT.CROP, height: styles.bannerImage.height, width }) }}
      />
    ) : (
      <View style={styles.title}>
        <Text medium style={styles.titleText}>
          {displayName.toUpperCase()}
        </Text>
      </View>
    )
  }

  trackSwipeShelf = shelf => {
    DataLayer.trackSwipeShelf(shelf)
  }

  renderItems = () => {
    const { data, singleList } = props
    const { config } = state
    const { items } = data

    return (
      <ScrollView
        style={styles.container}
        horizontal={!singleList}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={[getContainerSpaces(), styles.contentContainer]}
        onScrollBeginDrag={() => trackSwipeShelf(data.displayName)}
      >
        <>
          {items.map((item, index) => {
            const kind = singleList
              ? productCardVisualizationsTypes.TWO_PER_LINE
              : productCardVisualizationsTypes.CAROUSEL
            return (
              <React.Fragment key={item.id}>
                {item.type === cardType.PRODUCT ? (
                  <ProductCard
                    accessibilityLabelPrefix={getProduct(item).shelfName}
                    onPress={() => selectItem(index, item, 'Product')}
                    kind={kind}
                    product={getProduct(item)}
                  />
                ) : null}
                {item.type === cardType.BRAND ? (
                  <ImageCard
                    accessibilityLabel={`image-brand-${item.displayName}`}
                    onPress={() => selectItem(index, item, 'Browse')}
                    image={get(item, 'images[0]')}
                  />
                ) : null}
              </React.Fragment>
            )
          })}
          {config.showSeeAllbutton && !singleList ? <SeeAllButton marginLeft={16} onPress={.navigateTo} /> : null}
        </>
      </ScrollView>
    )
  }

  render() {
    return (
      <View>
        {renderHeader()}
        {renderItems()}
      </View>
    )
  }
}

Shelf.propTypes = {
  data: PropTypes.objectOf(PropTypes.shape).isRequired,
  singleList: PropTypes.bool,
  bannerImage: PropTypes.string,
}

Shelf.defaultProps = {
  singleList: false,
  bannerImage: '',
}
