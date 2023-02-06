import {colors} from '@root/src/themes';
import {
  generateBankName,
  generateColorAndLabel,
} from '../transactionList.utils';

describe('transactionList.utils/generateColorAndLabel', () => {
  it('return generateColorAndLabel SUCCESS, PENDING & Default', () => {
    expect(generateColorAndLabel('SUCCESS')).toStrictEqual({
      backgroundColor: colors.green,
      borderColor: colors.green,
      fontType: 'fs12fw800White',
      label: 'Berhasil',
    });
    expect(generateColorAndLabel('PENDING')).toStrictEqual({
      backgroundColor: colors.transparent,
      borderColor: colors.orange,
      fontType: 'fs12fw800Black',
      label: 'Pengecekan',
    });
    expect(generateColorAndLabel('')).toStrictEqual({
      backgroundColor: colors.transparent,
      borderColor: colors.orange,
      fontType: 'fs12fw400Black',
      label: '-',
    });
  });
});
describe('transactionList.utils/generateBankName', () => {
  it('return generateBankName uppercase', () => {
    expect(generateBankName('btpn')).toStrictEqual('BTPN');
  });
});
