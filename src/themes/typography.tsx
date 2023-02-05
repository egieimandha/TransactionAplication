import {colors} from './colors';
import {normalize} from './metrics';

const fontsize = {
  fs12: normalize(12),
  fs14: normalize(14),
};

const fontType = {
  fs12fw400Black: {
    fontSize: fontsize.fs12,
    color: colors.black,
  },
  fs12fw400BlackUnderline: {
    fontSize: fontsize.fs12,
    color: colors.black,
    textDecorationLine: 'underline',
  },
  fs12fw800Black: {
    fontSize: fontsize.fs12,
    color: colors.black,
    fontWeight: 'bold',
  },
  fs12fw400White: {
    fontSize: fontsize.fs12,
    color: colors.white,
  },
  fs12fw800White: {
    fontSize: fontsize.fs12,
    color: colors.white,
    fontWeight: 'bold',
  },
  fs12fw400Orange: {
    fontSize: fontsize.fs12,
    color: colors.orange,
  },
  fs12fw800Orange: {
    fontSize: fontsize.fs12,
    color: colors.orange,
    fontWeight: 'bold',
  },
  fs14fw400Black: {
    fontSize: fontsize.fs14,
    color: colors.black,
  },
  fs14fw800Black: {
    fontSize: fontsize.fs14,
    color: colors.black,
    fontWeight: 'bold',
  },
};

export {fontType};
