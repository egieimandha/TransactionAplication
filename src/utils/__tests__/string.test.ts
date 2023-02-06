import {thousandSeparator, toCurrency, dateStringToDate} from '../strings';

describe('utils/thousandSeparator', () => {
  it('return thousandSeparator correctly', () => {
    expect(thousandSeparator('abc')).toStrictEqual('abc');
    expect(thousandSeparator(10000)).toStrictEqual('10.000');
  });
});
describe('utils/toCurrency', () => {
  it('return toCurrency correctly', () => {
    expect(toCurrency(10000)).toStrictEqual('Rp10.000');
  });
});
describe('utils/dateStringToDate', () => {
  it('return dateStringToDate correctly', () => {
    expect(dateStringToDate(null)).toStrictEqual('');
    expect(dateStringToDate('2023-02-06 14:30:42')).toStrictEqual(
      '6 Februari 2023',
    );
  });
});
