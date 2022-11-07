import React from 'react';
import { StyleSheet } from 'react-native';

// components
import MainContainer from '../components/containers/MainContainer';
import StyledText from '../components/containers/Texts/StyledText';
import NewsSection from '../components/containers/News/NewsSection';
import ExploreSection from '../components/Explore/ExploreSection';

// data
import { newsData, exploreData } from '../config/data';

const styles = StyleSheet.create({
  sectionTitle: {
    marginTop: 25,
    marginLeft: 25,
  },
});

export default function Home() {
  return (
    <MainContainer>
      <StyledText style={styles.sectionTitle} big>
        Trending News
      </StyledText>
      <NewsSection data={newsData} />
      <StyledText style={styles.sectionTitle} big>
        Explore
      </StyledText>
      <ExploreSection data={exploreData} />
    </MainContainer>
  );
}
