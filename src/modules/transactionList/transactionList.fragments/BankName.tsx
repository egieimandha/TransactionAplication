import React from 'react';
import {Image} from 'react-native';
import {Text, View} from '@components';
import {images, colors} from '@root/src/themes';
import {styles} from '../transactionList.style';
import {generateBankName} from '../transactionList.utils';
import {BankNameProps} from '../transactionList.interface';

function BankName({
  sender,
  beneficiary,
  fontType = 'fs12fw800Black',
}: BankNameProps): JSX.Element {
  return (
    <View size="plain" row alignItems="center">
      <Text type={fontType}>{generateBankName(sender)}</Text>
      <Image
        source={images.iconArrowRight}
        style={[styles.icon, {tintColor: colors.black}]}
      />
      <Text type={fontType}>{generateBankName(beneficiary)}</Text>
    </View>
  );
}

export default BankName;
