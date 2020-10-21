import {colors} from 'services/style';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  product: {
    backgroundColor: colors.WHITE,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 8,
  },
  image: {
    width: 127,
    height: 130,
    borderRadius: 8,
  },
})