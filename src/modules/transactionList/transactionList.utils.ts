import {colors} from '@root/src/themes';
import {LabelStatusProps} from './transactionList.interface';

export function generateColorAndLabel(status: string): LabelStatusProps {
  switch (status) {
    case 'SUCCESS':
      return {
        backgroundColor: colors.green,
        borderColor: colors.green,
        fontType: 'fs12fw800White',
        label: 'Berhasil',
      };
    case 'PENDING':
      return {
        backgroundColor: colors.transparent,
        borderColor: colors.orange,
        fontType: 'fs12fw800Black',
        label: 'Pengecekan',
      };
    default:
      return {
        backgroundColor: colors.transparent,
        borderColor: colors.orange,
        fontType: 'fs12fw400Black',
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
