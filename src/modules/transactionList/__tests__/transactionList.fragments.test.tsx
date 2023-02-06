import React from 'react';
import BankName from '../transactionList.fragments/BankName';
import renderer from 'react-test-renderer';

describe('transactionList.fragments/BankName', () => {
  it('renders TransactionDetailContainer correctly', () => {
    renderer.create(
      <BankName sender="Test Sender" beneficiary="Test Beneficiary" />,
    );
  });
});
