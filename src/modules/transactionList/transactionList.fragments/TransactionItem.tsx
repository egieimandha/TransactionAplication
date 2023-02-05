import React from 'react';
import {View, Text} from '@components';
import {toCurrency, dateStringToDate} from '@utils/strings';
import {radius, spacings} from '@root/src/themes';
import {
  BarStatuProps,
  LabelStatusProps,
  Transaction,
} from '../transactionList.interface';
import {
  generateBankName,
  generateColorAndLabel,
} from '../transactionList.utils';

function LabelStatus({
  backgroundColor,
  borderColor,
  label,
  fontType,
}: LabelStatusProps): JSX.Element {
  return (
    <View
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      borderWidth={1}
      borderRadius={radius.round8}
      paddingHorizontal={spacings.space10}>
      <Text type={fontType}>{label}</Text>
    </View>
  );
}

function BarStatus({backgroundColor}: BarStatuProps): JSX.Element {
  return (
    <View
      backgroundColor={backgroundColor}
      size="plain"
      height="100%"
      width={radius.round10 / 2}
      borderTopLeftRadius={radius.round10}
      borderBottomLeftRadius={radius.round10}
    />
  );
}

function TransactionItem({
  sender_bank,
  beneficiary_bank,
  beneficiary_name,
  amount,
  created_at,
  status,
}: Transaction): JSX.Element {
  const {backgroundColor, borderColor, label, fontType} =
    generateColorAndLabel(status);
  return (
    <View
      row
      size="plain"
      alignItems="center"
      marginVertical={spacings.space4}
      backgroundColor="white"
      borderRadius={radius.round10}>
      <BarStatus backgroundColor={borderColor} />
      <View flex>
        <Text type="fs12fw800Black">{`${generateBankName(
          sender_bank,
        )} -> ${generateBankName(beneficiary_bank)}`}</Text>
        <Text uppercase>{beneficiary_name}</Text>
        <Text>{`${toCurrency(amount)} . ${dateStringToDate(created_at)}`}</Text>
      </View>
      <View>
        <LabelStatus
          backgroundColor={backgroundColor}
          borderColor={borderColor}
          label={label}
          fontType={fontType}
        />
      </View>
    </View>
  );
}

export default TransactionItem;
