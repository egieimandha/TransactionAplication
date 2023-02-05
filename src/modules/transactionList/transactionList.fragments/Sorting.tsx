import React from 'react';
import {Image, Modal, Pressable} from 'react-native';
import {View, Text} from '@components';
import {sortingList} from '../transactionList.datasource';
import {colors, images, radius, spacings} from '@root/src/themes';
import {useRecoilState, useRecoilValue, useSetRecoilState} from 'recoil';
import {aModalSorting, aSorting} from '../transactionList.model';
import {SortingProps} from '../transactionList.interface';
import {styles} from '../transactionList.style';

function SortingItem(sortingData: SortingProps): JSX.Element {
  const {label} = sortingData;
  const setModalVisible = useSetRecoilState(aModalSorting);
  const [sorting, setSorting] = useRecoilState(aSorting);

  const onSelectSorting = () => {
    setModalVisible(false);
    setSorting(sortingData);
  };

  return (
    <Pressable onPress={() => onSelectSorting()}>
      <View row alignItems="center">
        <View>
          <Image
            source={
              sorting.label === sortingData.label
                ? images.iconRadioOn
                : images.iconRadioOff
            }
            style={styles.icon}
          />
        </View>
        <Text>{label}</Text>
      </View>
    </Pressable>
  );
}

function SortingLists(): JSX.Element {
  const sortingData = sortingList;
  if (sortingData && sortingData.length > 0) {
    return (
      <>
        {sortingList.map(sorting => {
          return <SortingItem key={sorting.label} {...sorting} />;
        })}
      </>
    );
  }

  return (
    <View>
      <Text>Tidak ada data sorting</Text>
    </View>
  );
}

function SortingModal(): JSX.Element {
  const [modalVisible, setModalVisible] = useRecoilState(aModalSorting);
  return (
    <Modal
      animationType="fade"
      transparent
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <Pressable
        onPress={() => setModalVisible(!modalVisible)}
        style={styles.containerModal}>
        <View flex justifyContent="center">
          <View
            marginHorizontal={spacings.space20}
            borderRadius={radius.round8}
            backgroundColor={colors.white}>
            <SortingLists />
          </View>
        </View>
      </Pressable>
    </Modal>
  );
}

function Sorting(): JSX.Element {
  const setModalVisible = useSetRecoilState(aModalSorting);
  const sorting = useRecoilValue(aSorting);
  return (
    <>
      <Pressable onPress={() => setModalVisible(true)}>
        <View row size="plain">
          <Text type="fs12fw800Orange">{sorting.label}</Text>
          <Image source={images.iconChevronDown} style={styles.icon} />
        </View>
      </Pressable>
      <SortingModal />
    </>
  );
}

export default Sorting;
