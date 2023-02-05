import React from 'react';
import {Text as NativeText} from 'react-native';
import {fontType} from '@root/src/themes';
import {TextProps} from './text.interface';

function Text(props: TextProps): JSX.Element {
  const {
    children = '',
    type = 'fs12fw400Black',
    style = {},
    wrap = false,
    center = false,
    uppercase = false,
    adjustsFontSizeToFit = false,
    underline = false,
    lineThrough = false,
    paddingVertical = null,
    paddingHorizontal = null,
    marginVertical = null,
    marginHorizontal = null,
    ...rest
  } = props;

  return (
    <NativeText
      {...rest}
      adjustsFontSizeToFit={adjustsFontSizeToFit}
      style={[
        fontType[type],
        {
          ...(wrap && {flex: 1, flexWrap: 'wrap'}),
          ...(center && {textAlign: 'center'}),
          ...(uppercase && {textTransform: 'uppercase'}),
          ...(underline && {textDecorationLine: 'underline'}),
          ...(lineThrough && {textDecorationLine: 'line-through'}),
          ...(paddingVertical && {paddingVertical: paddingVertical}),
          ...(paddingHorizontal && {paddingHorizontal: paddingHorizontal}),
          ...(marginVertical && {marginVertical: marginVertical}),
          ...(marginHorizontal && {marginHorizontal: marginHorizontal}),
        },
        style,
      ]}>
      {children}
    </NativeText>
  );
}

export default Text;
