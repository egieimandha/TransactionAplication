import React from 'react';
import {Image, Platform, TextInput} from 'react-native';
import {View} from '@components';
import {radius, spacings, images, colors} from '@root/src/themes';
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
      paddingVertical={
        Platform.OS === 'android' ? -spacings.space20 : spacings.space12
      }
      paddingHorizontal={spacings.space8}
      borderRadius={radius.round10}
      backgroundColor="white">
      <Image
        source={images.iconSearch}
        style={[
          styles.icon,
          {
            tintColor: colors.gray,
            marginRight:
              Platform.OS === 'android' ? spacings.space2 : spacings.space6,
          },
        ]}
      />
      <View flex size="plain">
        <Search />
      </View>
      <Sorting />
    </View>
  );
}

export default SearchAndSorting;
