import {colors} from '@root/src/themes';
import {ColorAndLabel} from './transactionList.interface';

export function generateColorAndLabel(status: string): ColorAndLabel {
  switch (status) {
    case 'SUCCESS':
      return {
        backgroundColor: colors.green,
        borderColor: colors.green,
        label: 'Berhasil',
      };
    case 'PENDING':
      return {
        backgroundColor: colors.transparent,
        borderColor: colors.orange,
        label: 'Pengecekan',
      };
    default:
      return {
        backgroundColor: colors.transparent,
        borderColor: colors.orange,
        label: '-',
      };
  }
}

export function generateBankName(bankName: string): string {
  if (bankName.length > 4) {
    return bankName.charAt(0).toUpperCase() + bankName.slice(1);
  } else {
    return bankName.toUpperCase();
  }
}
