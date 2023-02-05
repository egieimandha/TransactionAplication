import {TextProps as NativeTextProps, TextStyle, StyleProp} from 'react-native';
import {fontType} from '@root/src/themes';

export type FontTypeStyle = keyof typeof fontType;

export interface TextProps extends NativeTextProps {
  children?:
    | number
    | string
    | string[]
    | JSX.Element
    | JSX.Element[]
    | (string | JSX.Element)[];
  style?: TextStyle | TextStyle[] | StyleProp<TextStyle>;
  wrap?: boolean;
  center?: boolean;
  uppercase?: boolean;
  type?: FontTypeStyle;
  underline?: boolean;
  lineThrough?: boolean;
  paddingVertical?: number;
  paddingHorizontal?: number;
  marginVertical?: number;
  marginHorizontal?: number;
}
