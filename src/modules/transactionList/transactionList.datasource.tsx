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

export const sortingList = [
  {
    label: 'URUTKAN',
    sortby: '',
    sorttype: '',
  },
  {
    label: 'Nama A-Z',
    sortby: 'beneficiary_name',
    sorttype: 'asc',
  },
  {
    label: 'Nama Z-A',
    sortby: 'beneficiary_name',
    sorttype: 'desc',
  },
  {
    label: 'Tanggal Terbaru',
    sortby: 'created_at',
    sorttype: 'desc',
  },
  {
    label: 'Tanggal Terlama',
    sortby: 'created_at',
    sorttype: 'asc',
  },
];
