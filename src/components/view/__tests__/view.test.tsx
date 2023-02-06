import React from 'react';
import View from '../View';
import renderer from 'react-test-renderer';

describe('@components/View', () => {
  it('renders no children correctly', () => {
    renderer.create(<View />);
  });
  it('renders with props flex row width height correctly', () => {
    renderer.create(<View header flex row width={100} height={50} />);
  });
  it('renders with props column padding correctly', () => {
    renderer.create(
      <View column paddingVertical={10} paddingHorizontal={10} />,
    );
  });
  it('renders with props backgroundColor margin correctly', () => {
    renderer.create(
      <View backgroundColor="red" marginVertical={10} marginHorizontal={10} />,
    );
  });
  it('renders with props border correctly', () => {
    renderer.create(
      <View borderRadius={10} borderWidth={1} borderColor="white" />,
    );
  });
  it('renders with props border radius each corner correctly', () => {
    renderer.create(
      <View
        borderTopLeftRadius={10}
        borderTopRightRadius={10}
        borderBottomLeftRadius={10}
        borderBottomRightRadius={10}
      />,
    );
  });
});
