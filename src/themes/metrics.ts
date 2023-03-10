import {Dimensions, PixelRatio} from 'react-native';

const {width, height} = Dimensions.get('window');
const {width: SCREEN_WIDTH} = Dimensions.get('window');

const scale = SCREEN_WIDTH / 375;

export function normalize(size: number) {
  const newSize = size * scale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

const spacings = {
  space1: normalize(1),
  space2: normalize(2),
  space4: normalize(4),
  space6: normalize(6),
  space8: normalize(8),
  space10: normalize(10),
  space12: normalize(12),
  space16: normalize(16),
  space20: normalize(20),
  space60: normalize(60),
};

const radius = {
  round4: normalize(4),
  round8: normalize(8),
  round10: normalize(10),
};

const display = {
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  halfScreenHeight: height / 2,
  halfScreenWidth: width / 2,
  twoPointFiveWidth: width / 2.5,
};

const percentOfHeight = (numberOfPercent: number) => {
  return (numberOfPercent / 100) * Dimensions.get('window').height;
};
const percentOfWidth = (numberOfPercent: number) => {
  return (numberOfPercent / 100) * Dimensions.get('window').width;
};

export {spacings, radius, display, percentOfHeight, percentOfWidth};
