import {ResponseAPI} from '@utils';

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

export type ColorAndLabel = {
  backgroundColor: string;
  borderColor: string;
  label: string;
};

export type BarStatuProps = {
  backgroundColor: string;
};

export interface LabelStatusProps extends BarStatuProps {
  borderColor: string;
  label: string;
}
