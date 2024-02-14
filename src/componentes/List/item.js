import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
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
      <Text style={[styles.title, { marginRight: 50 }]}>{data?.name}</Text>
      <TouchableOpacity onPress={delJogador} style={styles.delButton}>
        <Text style={styles.delButtonText}>X</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Item;
