import {getListTransaction} from './transactionList.datasource';
import {Transaction} from './transactionList.interface';

export async function fetchListTransaction(): Promise<null | Transaction[]> {
  const response = await getListTransaction();

  if (response) {
    const temp = Object.values(response);
    if (temp.length > 0) {
      return temp;
    }
  }

  return null;
}
