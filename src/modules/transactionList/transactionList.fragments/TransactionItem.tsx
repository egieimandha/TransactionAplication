import React from 'react';
import {View, Text} from '@components';
import {toCurrency, dateStringToDate} from '@utils/strings';
import {radius, spacings} from '@root/src/themes';
import {
  BarStatuProps,
  LabelStatusProps,
  Transaction,
} from '../transactionList.interface';
import {generateColorAndLabel} from '../transactionList.utils';
import {afTransaction} from '../transactionList.model';
import {useRecoilState} from 'recoil';
import BankName from './BankName';

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

function TransactionItem(dataTransaction: Transaction): JSX.Element {
  const {
    sender_bank,
    beneficiary_bank,
    beneficiary_name,
    amount,
    created_at,
    status,
    id,
  } = dataTransaction;
  const [transaction, setTransaction] = useRecoilState(afTransaction(id));
  const {backgroundColor, borderColor, label, fontType} =
    generateColorAndLabel(status);

  React.useEffect(() => {
    if (!transaction) {
      setTransaction(dataTransaction);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        <BankName sender={sender_bank} beneficiary={beneficiary_bank} />
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
