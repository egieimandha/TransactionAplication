import {Dimensions, PixelRatio} from 'react-native';

const {width, height} = Dimensions.get('window');
const {width: SCREEN_WIDTH} = Dimensions.get('window');

const scale = SCREEN_WIDTH / 375;
export function nomalize(size: number) {
  const newSize = size * scale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

const spacings = {
  space2: nomalize(2),
  space4: nomalize(4),
  space6: nomalize(6),
  space8: nomalize(8),
  space10: nomalize(10),
  space60: nomalize(60),
};

const radius = {
  round4: nomalize(4),
  round8: nomalize(8),
  round10: nomalize(10),
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
