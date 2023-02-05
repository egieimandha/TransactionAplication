import React, {PropsWithChildren} from 'react';
import {Pressable} from 'react-native';
import {View, Text} from '@components';
import {colors, spacings} from '@root/src/themes';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProps} from '@root/src/navigation/screens.interface';

function TransactionHeaderAndBody({
  header,
  body,
  isLeft,
}: {
  header: string;
  body: string;
  isLeft?: boolean;
}): JSX.Element {
  return (
    <View size="plain" width={isLeft ? '65%' : ''}>
      <Text type="fs12fw800Black">{header}</Text>
      <Text>{body}</Text>
    </View>
  );
}

export function TransactionDetailItem({
  leftContent,
  rightContent,
}: {
  leftContent: {
    header: string;
    body: string;
  };
  rightContent?: {
    header: string;
    body: string;
  };
}): JSX.Element {
  return (
    <View row size="plain" marginVertical={spacings.space4}>
      <TransactionHeaderAndBody
        header={leftContent.header}
        body={leftContent.body}
        isLeft
      />
      {rightContent ? (
        <TransactionHeaderAndBody
          header={rightContent.header}
          body={rightContent.body}
        />
      ) : (
        <></>
      )}
    </View>
  );
}

export function TransactionDetailContainer({
  children,
}: PropsWithChildren): JSX.Element {
  return (
    <View
      size="plain"
      paddingVertical={spacings.space12}
      paddingHorizontal={spacings.space16}
      backgroundColor={colors.white}
      marginVertical={spacings.space2}>
      {children}
    </View>
  );
}

export function CloseScreen(): JSX.Element {
  const {goBack} = useNavigation<RootStackNavigationProps>();
  return (
    <Pressable onPress={() => goBack()}>
      <View size="plain">
        <Text type="fs12fw400Orange">Tutup</Text>
      </View>
    </Pressable>
  );
}
