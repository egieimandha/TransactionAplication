import React from 'react';
import {Container, View, Text} from '@components';
import {useRecoilValue} from 'recoil';
import {afTransaction} from '../transactionList/transactionList.model';
import {useRoute} from '@react-navigation/native';
import {TransactionDetailNavigationProps} from '@root/src/navigation/screens.interface';
import {colors, spacings} from '@root/src/themes';
import {generateBankName} from '../transactionList/transactionList.utils';
import {dateStringToDate, toCurrency} from '@root/src/utils/strings';
import {
  TransactionDetailItem,
  TransactionDetailContainer,
  CloseScreen,
} from './transactionDetail.fragments/TransactionDetailFragmetns';

function TransactionDetail(): JSX.Element {
  const {params} = useRoute<TransactionDetailNavigationProps>();
  const transaction = useRecoilValue(afTransaction(params.transaction_id));
  if (transaction) {
    const {
      id,
      sender_bank,
      beneficiary_bank,
      beneficiary_name,
      account_number,
      amount,
      remark,
      unique_code,
      created_at,
    } = transaction;

    return (
      <Container>
        <View size="plain">
          <View size="small" />
          <View
            size="plain"
            paddingVertical={spacings.space12}
            paddingHorizontal={spacings.space16}
            backgroundColor={colors.white}>
            <Text type="fs12fw800Black">{`ID TRANSAKSI: #${id}`}</Text>
          </View>
          <TransactionDetailContainer>
            <View size="plain" row>
              <View flex size="plain">
                <Text type="fs12fw800Black">DETAIL TRANSAKSI</Text>
              </View>
              <CloseScreen />
            </View>
          </TransactionDetailContainer>
          <TransactionDetailContainer>
            <View row size="plain" marginVertical={spacings.space2}>
              <Text type="fs14fw800Black">{`${generateBankName(
                sender_bank,
              )} -> ${generateBankName(beneficiary_bank)}`}</Text>
            </View>
            <TransactionDetailItem
              leftContent={{
                header: beneficiary_name,
                body: account_number,
              }}
              rightContent={{
                header: 'NOMINAL',
                body: toCurrency(amount).toString(),
              }}
            />
            <TransactionDetailItem
              leftContent={{
                header: 'BERITA TRANSFER',
                body: remark,
              }}
              rightContent={{
                header: 'KODE UNIK',
                body: unique_code.toString(),
              }}
            />
            <TransactionDetailItem
              leftContent={{
                header: 'WAKTU DIBUAT',
                body: dateStringToDate(created_at),
              }}
            />
          </TransactionDetailContainer>
        </View>
      </Container>
    );
  }

  return (
    <View>
      <CloseScreen />
      <View />
      <Text type="fs14fw800Black" center>
        Data tidak ditemukan
      </Text>
    </View>
  );
}

export default TransactionDetail;
