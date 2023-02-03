import axios from 'axios';
import {FE_TEST} from '@utils';
import instance from '@utils/instance';
import {
  TransactionlistResponse,
  Transactionlist,
} from './transactionList.interface';

export async function getListTransaction(): Promise<null | Transactionlist> {
  try {
    const response = await instance.get<TransactionlistResponse>(FE_TEST);

    if (response.status === 200 && response.data !== null) {
      return {...response.data};
    }

    return null;
  } catch (e) {
    if (axios.isAxiosError(e)) {
      return null;
    }

    return null;
  }
}
