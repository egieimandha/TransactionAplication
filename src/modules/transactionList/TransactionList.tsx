import React from 'react';
import {Text, Pressable, FlatList, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Container, View} from '@components';
import {RootStackNavigationProps} from '@navigation/screens.interface';
import {fetchListTransaction} from './transactionList.model';
import {Transaction} from './transactionList.interface';
import {spacings} from '@root/src/themes';
import TransactionItem from './transactionList.fragments/TransactionItem';

function TransactionList(): JSX.Element {
  const {navigate} = useNavigation<RootStackNavigationProps>();
  const [transactions, setTransactions] = React.useState<null | Transaction[]>(
    null,
  );

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
        <View>
          <Text>List</Text>
        </View>
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
