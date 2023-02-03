import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {Container} from '@components';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProps} from '@navigation/screens.interface';
import {fetchListTransaction} from './transactionList.model';
import {Transaction} from './transactionList.interface';

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

  return (
    <Container>
      <View>
        <Text>List</Text>
      </View>
      {transactions?.map(item => {
        return (
          <Pressable
            key={item.id}
            onPress={() =>
              navigate('DetailTransaction', {
                transaction_id: item.id,
              })
            }>
            <View>
              <Text>{item.id}</Text>
            </View>
          </Pressable>
        );
      })}
    </Container>
  );
}

export default TransactionList;
