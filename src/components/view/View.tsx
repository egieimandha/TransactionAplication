import React from 'react';
import {View as NativeView} from 'react-native';
import {ViewProps} from './view.interface';
import styles from './view.style';

function View({
  children,
  testID = 'customView',
  style = {},
  header = false,
  row = false,
  column = false,
  flex = false,
  size = 'normal',
  width = undefined,
  height = undefined,
  paddingVertical = undefined,
  paddingHorizontal = undefined,
  marginVertical = undefined,
  marginHorizontal = undefined,
  backgroundColor = undefined,
  borderRadius = undefined,
  borderWidth = undefined,
  borderColor = undefined,
  borderTopLeftRadius = undefined,
  borderTopRightRadius = undefined,
  borderBottomLeftRadius = undefined,
  borderBottomRightRadius = undefined,
  ...props
}: ViewProps): JSX.Element {
  const baseStyle = header ? styles.containerHeader : styles.container;
  return (
    <NativeView
      testID={testID}
      {...props}
      style={[
        baseStyle,
        styles[size],
        {
          ...(flex && {flex: 1}),
          ...(row && {flexDirection: 'row'}),
          ...(column && {flexDirection: 'column'}),
          ...(width && {width}),
          ...(height && {height}),
          ...(paddingVertical && {paddingVertical}),
          ...(paddingHorizontal && {paddingHorizontal}),
          ...(marginVertical && {marginVertical}),
          ...(marginHorizontal && {marginHorizontal}),
          ...(backgroundColor && {backgroundColor}),
          ...(borderRadius && {borderRadius}),
          ...(borderWidth && {borderWidth}),
          ...(borderColor && {borderColor}),
          ...(borderTopLeftRadius && {borderTopLeftRadius}),
          ...(borderTopRightRadius && {borderTopRightRadius}),
          ...(borderBottomLeftRadius && {borderBottomLeftRadius}),
          ...(borderBottomRightRadius && {borderBottomRightRadius}),
        },
        style,
      ]}>
      {children}
    </NativeView>
  );
}

export default View;
