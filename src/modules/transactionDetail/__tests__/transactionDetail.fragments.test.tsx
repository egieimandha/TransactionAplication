import React from 'react';
import {
  TransactionDetailContainer,
  TransactionDetailItem,
  CloseScreen,
} from '../transactionDetail.fragments/TransactionDetailFragments';
import renderer from 'react-test-renderer';

describe('transactionDetail.fragments/TransactionDetailFragments/TransactionDetailItem', () => {
  it('renders TransactionDetailContainer correctly', () => {
    renderer.create(<TransactionDetailContainer />);
  });
  it('renders TransactionDetailItem correctly', () => {
    renderer.create(
      <TransactionDetailItem
        leftContent={{
          header: 'Left Header Test',
          body: 'Left Body Test',
        }}
        rightContent={{
          header: 'Right Header Test',
          body: 'Right Body Test',
        }}
      />,
    );
  });
  it('renders CloseScreen correctly', () => {
    renderer.create(<CloseScreen />);
  });
});
