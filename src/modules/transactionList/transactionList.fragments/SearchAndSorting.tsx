import React from 'react';
import {Image, TextInput} from 'react-native';
import {View} from '@components';
import {radius, spacings, fontType, images, colors} from '@root/src/themes';
import {useRecoilState} from 'recoil';
import {aSearch} from '../transactionList.model';
import Sorting from './Sorting';
import {styles} from '../transactionList.style';

let delayTimer: number;

function Search(): JSX.Element {
  const [search, setSearch] = useRecoilState(aSearch);
  const inputRef = React.createRef<TextInput>();

  React.useEffect(() => {
    if (!search) {
      inputRef.current?.setNativeProps({
        text: '',
      });
    }
  }, [inputRef, search]);

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
      ref={inputRef}
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
      alignItems="center"
      marginVertical={spacings.space4}
      paddingVertical={spacings.space8}
      paddingHorizontal={spacings.space4}
      borderRadius={radius.round10}
      backgroundColor="white">
      <View>
        <Image
          source={images.iconSearch}
          style={[styles.icon, {tintColor: colors.gray}]}
        />
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
