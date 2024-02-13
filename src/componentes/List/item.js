import React from 'react';
import { Button, Text, View } from 'react-native';
import { styles } from './style';
import { deleteJogadores } from '../../service/jogadores';

function Item({ data, delItem }) {
  const delJogador = async () => {
    try {
      await deleteJogadores(data.id);

      delItem(data.id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.item}>
      <Text style={styles.title}>{data?.name}</Text>
      <Button onPress={delJogador} title="Del" color="#841584" />
    </View>
  );
}

export default Item;
