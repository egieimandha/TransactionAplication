export const thousandSeparator = (x: number | string): string | number => {
  if (Number.isNaN(x)) {
    return x;
  }
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};

export const toCurrency = (money: number): string | number => {
  return Number.isNaN(money) ? money : `Rp${thousandSeparator(money)}`;
};

export const dateStringToDate = (date: string | null): string => {
  if (date === null) {
    return '';
  }

  const dateParts = date.split('-');
  const localDate = dateParts[2].split(' ')[0];

  const newDate = new Date();
  newDate.setDate(Number(localDate));
  newDate.setMonth(Number(dateParts[1]) - 1);
  newDate.setFullYear(Number(dateParts[0]));

  return newDate.toLocaleDateString('id-id', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
};
