import React from 'react';
import { FlatList } from 'react-native';

import NewsItem from './NewsItem';

function NewsSection({ data }) {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <NewsItem {...item} />}
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

export default NewsSection;
