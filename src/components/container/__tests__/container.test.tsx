import React from 'react';
import Container from '../Container';
import renderer from 'react-test-renderer';

describe('@components/Container', () => {
  it('renders correctly', () => {
    renderer.create(<Container />);
  });
});
