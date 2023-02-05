import React from 'react';
import {TextInput} from 'react-native';
import {View, Text} from '@components';
import {radius, spacings, fontType} from '@root/src/themes';
import {useRecoilState} from 'recoil';
import {aSearch} from '../transactionList.model';
import Sorting from './Sorting';

let delayTimer: number;

function Search(): JSX.Element {
  const [search, setSearch] = useRecoilState(aSearch);

  const findData = (text: string) => {
    if (text === '') {
      clearTimeout(delayTimer);
      setSearch(text);
    } else {
      clearTimeout(delayTimer);
      delayTimer = setTimeout(() => {
        setSearch(text);
      }, 1000);
    }
  };

  return (
    <TextInput
      style={
        search ? fontType.fs12fw400BlackUnderline : fontType.fs12fw400Black
      }
      placeholder="Cari nama, bank atau nominal"
      onChangeText={(text: string) => findData(text)}
    />
  );
}

function SearchAndSorting(): JSX.Element {
  return (
    <View
      row
      size="plain"
      marginVertical={spacings.space4}
      paddingVertical={spacings.space8}
      paddingHorizontal={spacings.space4}
      borderRadius={radius.round10}
      backgroundColor="white">
      <View>
        <Text>ICN</Text>
      </View>
      <View flex>
        <Search />
      </View>
      <View>
        <Sorting />
      </View>
    </View>
  );
}

export default SearchAndSorting;
