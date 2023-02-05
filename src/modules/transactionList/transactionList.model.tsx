import {atom, atomFamily, selector} from 'recoil';
import {getListTransaction, sortingList} from './transactionList.datasource';
import {SortingProps, Transaction} from './transactionList.interface';

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

export const aTransactionLists = atom<Transaction[]>({
  key: 'transactionLists',
  default: [],
});

export const afTransaction = atomFamily<Transaction | null, string>({
  key: 'transaction',
  default: null,
});

export const aSearch = atom<string>({
  key: 'search',
  default: '',
});

export const aSorting = atom<SortingProps>({
  key: 'sorting',
  default: sortingList[0],
});

export const aModalSorting = atom<boolean>({
  key: 'modalSorting',
  default: false,
});

export const sFinalTransactionLists = selector<Transaction[]>({
  key: 'finalTransactionLists',
  get: opts => {
    let finalTransaction = opts.get(aTransactionLists);

    const search = opts.get(aSearch).toLocaleLowerCase();
    if (search) {
      finalTransaction = finalTransaction.filter(
        transaction =>
          transaction.beneficiary_name.toLocaleLowerCase().includes(search) ||
          transaction.sender_bank.toLocaleLowerCase().includes(search) ||
          transaction.beneficiary_bank.toLocaleLowerCase().includes(search) ||
          transaction.amount.toString().includes(search),
      );
    }

    const sorting = opts.get(aSorting);
    if (sorting.sortby) {
      finalTransaction = [...finalTransaction].sort(function (
        a: {[key: string]: string | number},
        b: {[key: string]: string | number},
      ) {
        let x = a[sorting.sortby];
        let y = b[sorting.sortby];
        if (x < y) {
          return sorting.sorttype === 'desc' ? 1 : -1;
        }
        if (x > y) {
          return sorting.sorttype === 'desc' ? -1 : 1;
        }
        return 0;
      });
    }

    return finalTransaction;
  },
  cachePolicy_UNSTABLE: {
    eviction: 'most-recent',
  },
});
