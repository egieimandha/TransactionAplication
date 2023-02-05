import {PropsWithChildren} from 'react';
import {
  StyleProp,
  ViewStyle,
  FlexStyle,
  ViewProps as NativeViewProps,
} from 'react-native';

export type ViewProps = PropsWithChildren<{
  testID?: string;
  style?: StyleProp<ViewStyle>;
  header?: boolean;
  row?: boolean;
  column?: boolean;
  flex?: boolean;
  size?: 'plain' | 'small' | 'normal';
  width?: number | string;
  height?: number | string;
  paddingVertical?: number;
  paddingHorizontal?: number;
  marginVertical?: number;
  marginHorizontal?: number;
  backgroundColor?: string;
  borderRadius?: number;
  borderWidth?: number;
  borderColor?: string;
  borderTopLeftRadius?: number;
  borderTopRightRadius?: number;
  borderBottomLeftRadius?: number;
  borderBottomRightRadius?: number;
}> &
  Pick<FlexStyle, 'justifyContent'> &
  Pick<FlexStyle, 'alignContent'> &
  Pick<FlexStyle, 'alignItems'> &
  Pick<FlexStyle, 'alignSelf'> &
  Pick<NativeViewProps, 'pointerEvents'>;
