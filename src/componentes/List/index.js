import React from 'react';
import { FlatList } from 'react-native';
import Item from './item';

import PropTypes from 'prop-types';

const List = ({ data, delItem }) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <Item data={item} delItem={delItem} />} //componente que vai renderizar
      keyExtractor={(item) => item.id} //todo componente tem que ter um att Key
    />
  );
};

List.propTypes = {
  data: PropTypes.object,
  delItem: PropTypes.func,
};

List.defaultProps = {
  data: [],
  delItem: () => {},
};

export default List;