import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { colors } from '../../config/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

function MainContainer({ children, style, ...props }) {
  const activeColors = colors;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={[
          {
            backgroundColor: activeColors.primary,
          },
          style,
        ]}
        showsVerticalScrollIndicator={false}
        {...props}
      >
        {children}
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
}

export default MainContainer;
