import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParams = {
  TransactionList: undefined;
  DetailTransaction: {
    transaction_id: string;
  };
};

export type RootStackNavigationProps =
  NativeStackNavigationProp<RootStackParams>;

export type TransactionDetailNavigationProps = RouteProp<
  RootStackParams,
  'DetailTransaction'
>;
