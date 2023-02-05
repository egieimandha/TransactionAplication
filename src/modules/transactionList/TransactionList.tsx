import React from 'react';
import {Pressable, FlatList, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Container, View} from '@components';
import {RootStackNavigationProps} from '@navigation/screens.interface';
import {
  aTransactionLists,
  fetchListTransaction,
  sFinalTransactionLists,
} from './transactionList.model';
import {Transaction} from './transactionList.interface';
import {spacings} from '@root/src/themes';
import TransactionItem from './transactionList.fragments/TransactionItem';
import SearchAndSorting from './transactionList.fragments/SearchAndSorting';
import {useRecoilValue, useSetRecoilState} from 'recoil';

function TransactionList(): JSX.Element {
  const {navigate} = useNavigation<RootStackNavigationProps>();
  const setTransactions = useSetRecoilState(aTransactionLists);
  const transactions = useRecoilValue(sFinalTransactionLists);

  React.useEffect(() => {
    let isMounted = true;
    async function fetchData() {
      await fetchListTransaction().then(res => {
        if (isMounted && res) {
          setTransactions(res);
        }
      });
    }
    fetchData();

    return () => {
      isMounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderItem = ({item}: {item: Transaction}) => {
    if (item && item.id) {
      return (
        <Pressable
          key={item.id}
          onPress={() =>
            navigate('DetailTransaction', {
              transaction_id: item.id,
            })
          }>
          <TransactionItem {...item} />
        </Pressable>
      );
    }
    return <></>;
  };

  return (
    <Container>
      <View paddingHorizontal={spacings.space8}>
        <SearchAndSorting />
        <FlatList
          style={styles.avoidPaddingFlatlist}
          data={transactions}
          renderItem={renderItem}
          keyExtractor={(item, index) => `${item.id}-${index}`}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  avoidPaddingFlatlist: {
    marginBottom: spacings.space60,
  },
});

export default TransactionList;
