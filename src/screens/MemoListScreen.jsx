import React from 'react';
import { View, StyleSheet } from 'react-native';

import MemoListItem from '../components/MemoListItem';
import CircleButton from '../components/CircleButton';

export default function MemoListScreen(props) {
  const { navigation } = props;
  return (
    <View style={styles.container}>

      <MemoListItem />

      <CircleButton
        name="plus"
        onPress={() => { navigation.navigate('MemoCreate'); }}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f0f8',
  },
});
