import React from 'react';
import {
  Pressable,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Platform,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Container, Text, View} from '@components';
import {RootStackNavigationProps} from '@navigation/screens.interface';
import {
  aSearch,
  aSorting,
  aTransactionLists,
  fetchListTransaction,
  sFinalTransactionLists,
} from './transactionList.model';
import {Transaction} from './transactionList.interface';
import {colors, display, radius, spacings} from '@root/src/themes';
import TransactionItem from './transactionList.fragments/TransactionItem';
import SearchAndSorting from './transactionList.fragments/SearchAndSorting';
import {useRecoilValue, useResetRecoilState, useSetRecoilState} from 'recoil';
import {useLoading} from 'hooks';

function TransactionFlatlist(): JSX.Element {
  const {navigate} = useNavigation<RootStackNavigationProps>();
  const setTransactions = useSetRecoilState(aTransactionLists);
  const transactions = useRecoilValue(sFinalTransactionLists);
  const resetTransactions = useResetRecoilState(aTransactionLists);
  const resetSearch = useResetRecoilState(aSearch);
  const resetSorting = useResetRecoilState(aSorting);
  const {doAction: execute, loading} = useLoading(fetchData);

  React.useEffect(() => {
    execute();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function fetchData() {
    await fetchListTransaction().then(res => {
      if (res) {
        setTransactions(res);
      }
    });
  }

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

  const emptyComponent = () => {
    if (!loading) {
      return (
        <View
          backgroundColor={colors.white}
          paddingVertical={spacings.space16}
          borderRadius={radius.round10}>
          <Text type="fs14fw800Black" center>
            Data tidak ditemukan
          </Text>
        </View>
      );
    }
    return (
      <View paddingVertical={spacings.space16} alignItems="center">
        <ActivityIndicator color={colors.orange} size="large" />
      </View>
    );
  };

  return (
    <FlatList
      style={styles.avoidPaddingFlatlist}
      data={transactions}
      renderItem={renderItem}
      keyExtractor={(item, index) => `${item.id}-${index}`}
      showsVerticalScrollIndicator={false}
      refreshing={loading}
      ListEmptyComponent={emptyComponent}
      onRefresh={() => {
        resetTransactions();
        resetSearch();
        resetSorting();
        execute();
      }}
    />
  );
}

function TransactionList(): JSX.Element {
  return (
    <Container>
      <View paddingHorizontal={spacings.space8}>
        <SearchAndSorting />
        <TransactionFlatlist />
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  avoidPaddingFlatlist: {
    marginBottom: display.screenHeight * (Platform.OS === 'android' ? 0.15 : 0),
  },
});

export default TransactionList;
