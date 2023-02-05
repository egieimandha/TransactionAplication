import React from 'react';
import {Modal, Pressable, StyleSheet, Text} from 'react-native';
import {View} from '@components';
import {sortingList} from '../transactionList.datasource';
import {colors, radius, spacings} from '@root/src/themes';
import {useRecoilState, useRecoilValue, useSetRecoilState} from 'recoil';
import {aModalSorting, aSorting} from '../transactionList.model';
import {SortingProps} from '../transactionList.interface';

function SortingItem(sortingData: SortingProps): JSX.Element {
  const {label} = sortingData;
  const setModalVisible = useSetRecoilState(aModalSorting);
  const setSorting = useSetRecoilState(aSorting);

  const onSelectSorting = () => {
    setModalVisible(false);
    setSorting(sortingData);
  };

  return (
    <Pressable onPress={() => onSelectSorting()}>
      <View row alignItems="center">
        <View>
          <Text>BLT</Text>
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
        <Text>{sorting.label} V</Text>
      </Pressable>
      <SortingModal />
    </>
  );
}

const styles = StyleSheet.create({
  containerModal: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    flex: 1,
  },
});

export default Sorting;
