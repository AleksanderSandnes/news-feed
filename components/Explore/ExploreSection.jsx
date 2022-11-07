import React from 'react';
import { FlatList } from 'react-native';

import ExploreItem from './ExploreItem';

function ExploreSection({ data }) {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <ExploreItem {...item} />}
      keyExtractor={({ id }) => id.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingLeft: 25,
        paddingTop: 25,
      }}
    />
  );
}

export default ExploreSection;