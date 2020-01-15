import { colors, SCREEN_WIDTH, defaultLateralPadding } from 'services/style'
import { StyleSheet } from 'react-native'
import { productCardVisualizationsTypes } from 'services/constants'

const PRODUCT_ONE_LINE_IMG_WIDTH = 120
const DEFAULT_LATERAL_PADDING = defaultLateralPadding.paddingLeft + defaultLateralPadding.paddingRight
const PRODUCT_INFO_WIDTH_WITH_PRODUCT_COUNTER_WIDTH =
  SCREEN_WIDTH - PRODUCT_ONE_LINE_IMG_WIDTH - DEFAULT_LATERAL_PADDING

export const styles = {
  [productCardVisualizationsTypes.CAROUSEL]: StyleSheet.create({
    container: {
      height: 208,
    },
    product: {
      margin: 4,
      borderRadius: 8,
      width: 128,
      backgroundColor: 'white',
    },
    image: {
      height: 112,
      alignItems: 'center',
      borderBottomWidth: 1,
      borderBottomColor: colors.OFF_WHITE,
    },
    productInfo: {
      paddingVertical: 2,
      paddingHorizontal: 8,
    },
    title: {
      minHeight: 35,
      justifyContent: 'center',
    },
    titleText: {
      color: colors.MEDIUM_GRAY,
    },
    priceText: {
      paddingVertical: 4,
      flexDirection: 'column',
      flexWrap: 'wrap',
    },
    discountedPrice: {
      color: colors.GRAY,
      marginRight: 2,
    },
    discountLabel: {
      color: colors.WHITE,
      backgroundColor: colors.DISCOUNT_RED,
      fontSize: 12,
      textAlign: 'center',
      fontWeight: '500',
      borderRadius: 8,
      padding: 3,
      overflow: 'hidden',
      position: 'absolute',
      top: 8,
      left: 8,
    },
  }),
  [productCardVisualizationsTypes.TWO_PER_LINE]: StyleSheet.create({
    container: {
      height: 208,
      alignItems: 'center',
      flexDirection: 'row',
      flexGrow: 1,
      maxWidth: '50%',
    },
    product: {
      margin: 4,
      flexGrow: 1,
      borderRadius: 8,
      width: 128,
      backgroundColor: colors.WHITE,
    },
    image: {
      height: 112,
      alignItems: 'center',
      width: '100%',
      borderBottomWidth: 1,
      borderBottomColor: colors.OFF_WHITE,
    },
    productInfo: {
      padding: 8,
    },
    title: {
      minHeight: 35,
      justifyContent: 'center',
    },
    titleText: {
      color: colors.MEDIUM_GRAY,
    },
    priceText: {
      paddingTop: 4,
      flexDirection: 'column',
      flexWrap: 'wrap',
    },
    discountedPrice: {
      color: colors.GRAY,
      marginRight: 2,
    },
    discountLabel: {
      color: colors.WHITE,
      backgroundColor: colors.DISCOUNT_RED,
      fontSize: 12,
      textAlign: 'center',
      fontWeight: '500',
      borderRadius: 8,
      padding: 3,
      overflow: 'hidden',
      position: 'absolute',
      top: 8,
      left: 8,
    },
  }),
  [productCardVisualizationsTypes.ONE_PER_LINE]: StyleSheet.create({
    container: {
      flexDirection: 'row',
      padding: 4,
    },
    product: {
      width: '100%',
      minHeight: 80,
      borderRadius: 8,
      flexDirection: 'row',
      backgroundColor: colors.WHITE,
    },
    image: {
      width: 120,
      height: 80,
      justifyContent: 'flex-start',
      alignItems: 'center',
      overflow: 'hidden',
    },
    imageFullHeight: {
      width: 120,
      justifyContent: 'flex-start',
      alignItems: 'center',
      overflow: 'hidden',
    },
    productInfo: {
      padding: 8,
      flex: 1,
      flexDirection: 'column',
    },
    title: {
      flex: 1,
      height: 40,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    titleText: {
      color: colors.MEDIUM_GRAY,
    },
    titleTextWithDeleteButton: {
      width: PRODUCT_INFO_WIDTH_WITH_PRODUCT_COUNTER_WIDTH - 48,
      paddingRight: 8,
      alignSelf: 'center',
      color: colors.MEDIUM_GRAY,
    },
    priceText: {
      height: 20,
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
    },
    productCounterContainer: {
      width: '100%',
      maxWidth: 152,
      marginTop: 4,
    },
    delete: {},
  }),
}
