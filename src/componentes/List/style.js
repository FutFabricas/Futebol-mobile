import {
  StyleSheet
} from 'react-native';

export const styles = StyleSheet.create({
  item: {
    flexDirection: 'row', // Alinha os itens em linha (horizontalmente)
    justifyContent: 'space-between', // Distribui os itens igualmente ao longo do eixo principal (horizontal)
    alignItems: 'center', // Alinha os itens verticalmente ao centro
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 15,
    color: 'white',
  },
  delButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
  },
  delButtonText: {
    color: 'white',
  }
});
