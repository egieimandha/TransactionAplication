import {ResponseAPI} from '@utils';
import {fontType} from '@root/src/themes';

export type Transaction = {
  id: string;
  amount: number;
  unique_code: number;
  status: string;
  sender_bank: string;
  account_number: string;
  beneficiary_name: string;
  beneficiary_bank: string;
  remark: string;
  created_at: string;
  completed_at: string;
  fee: number;
};

export type Transactionlist = {
  [key: string]: Transaction;
};

export type TransactionlistResponse = ResponseAPI<Transactionlist>;

export type FontTypeStyle = keyof typeof fontType;

export type BarStatuProps = {
  backgroundColor: string;
};

export interface LabelStatusProps extends BarStatuProps {
  borderColor: string;
  fontType: FontTypeStyle;
  label: string;
}

export type SortingProps = {
  label: string;
  sortby: string;
  sorttype: string;
};

export type BankNameProps = {
  sender: string;
  beneficiary: string;
  fontType?: FontTypeStyle;
};
