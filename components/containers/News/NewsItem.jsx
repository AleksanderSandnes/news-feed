import React from 'react';
import { StyleSheet, TouchableOpacity, Image, View } from 'react-native';
import { colors } from '../../../config/theme';
import StyledText from '../Texts/StyledText';

const styles = StyleSheet.create({
  container: {
    height: 370,
    width: 300,
    borderRadius: 25,
    marginRight: 20,
  },
  image: {
    width: 300,
    height: 190,
    borderRadius: 25,
  },
  bottomSection: {
    padding: 25,
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 19,
  },
  authorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  author: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 25,
    flex: 3,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  date: {
    textAlign: 'right',
    flex: 2,
  },
});

function NewsItem({ image, title, avatar, author, date, ...props }) {
  const activeColors = colors;

  return (
    <TouchableOpacity
      style={[{ backgroundColor: activeColors.secondary }, styles.container]}
      {...props}
    >
      <Image source={image} style={styles.image} />

      <View style={styles.bottomSection}>
        <StyledText
          numberOfLines={3}
          style={[{ color: activeColors.accent }, styles.title]}
          bold
        >
          {title}
        </StyledText>

        <View style={styles.authorRow}>
          <View style={styles.author}>
            <Image source={avatar} style={styles.avatar} />
            <StyledText numberOfLines={2} bold>
              {author}
            </StyledText>
          </View>

          <StyledText
            style={[{ color: activeColors.tertiary }, styles.date]}
            small
          >
            {date}
          </StyledText>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default NewsItem;