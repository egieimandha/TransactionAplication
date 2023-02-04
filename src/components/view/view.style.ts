import {StyleSheet} from 'react-native';
import {colors, spacings} from '../../themes';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.transparent,
    paddingHorizontal: spacings.space4,
  },
  containerHeader: {
    paddingVertical: spacings.space8,
    paddingHorizontal: spacings.space4,
    backgroundColor: colors.white,
  },
  small: {
    paddingVertical: spacings.space4,
  },
  normal: {
    paddingVertical: spacings.space8,
  },
  plain: {
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
});

export default styles;
