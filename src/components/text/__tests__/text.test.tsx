import React from 'react';
import Text from '../Text';
import renderer from 'react-test-renderer';

describe('@components/Text', () => {
  it('renders no children correctly', () => {
    renderer.create(<Text />);
  });
  it('renders default correctly', () => {
    renderer.create(<Text>Test Default</Text>);
  });
  it('renders with props correctly', () => {
    renderer.create(
      <Text
        wrap
        center
        uppercase
        underline
        lineThrough
        paddingVertical={10}
        paddingHorizontal={10}
        marginVertical={10}
        marginHorizontal={10}>
        Test Props
      </Text>,
    );
  });
});
