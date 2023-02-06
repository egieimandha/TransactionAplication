import {StyleSheet} from 'react-native';
import {colors, spacings} from '@root/src/themes';

export const styles = StyleSheet.create({
  containerModal: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    flex: 1,
  },
  icon: {
    width: spacings.space16,
    height: spacings.space16,
    tintColor: colors.orange,
  },
});
