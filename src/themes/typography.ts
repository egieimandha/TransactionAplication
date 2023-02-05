import {colors} from '../themes/colors';
import {normalize} from './metrics';

const fontsize = {
  fs12: normalize(12),
  fs16: normalize(16),
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
  fs16fw400Black: {
    fontSize: fontsize.fs16,
    color: colors.black,
  },
  fs16fw800Black: {
    fontSize: fontsize.fs16,
    color: colors.black,
    fontWeight: 'bold',
  },
};

export {fontType};
