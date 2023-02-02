import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {Container} from '@components';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProps} from '@navigation/screens.interface';

function TransactionList(): JSX.Element {
  const {navigate} = useNavigation<RootStackNavigationProps>();
  return (
    <Container>
      <View>
        <Text>List</Text>
      </View>
      <Pressable
        onPress={() =>
          navigate('DetailTransaction', {
            transaction_id: '1234',
          })
        }>
        <View>
          <Text>Go to Detail</Text>
        </View>
      </Pressable>
    </Container>
  );
}

export default TransactionList;
