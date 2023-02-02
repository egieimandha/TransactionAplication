import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import TransactionList from '@modules/transactionList/TransactionList';
import TransactionDetail from '@modules/transactionDetail/TransactionDetail';
import {RootStackParams} from './screens.interface';

/**
 * Root Stack
 */
const RootStack = createNativeStackNavigator<RootStackParams>();
export const RootNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        options={{headerShown: false}}
        name="TransactionList"
        component={TransactionList}
      />
      <RootStack.Screen
        name="DetailTransaction"
        component={TransactionDetail}
        options={{title: 'Transaction Detail'}}
      />
    </RootStack.Navigator>
  );
};
