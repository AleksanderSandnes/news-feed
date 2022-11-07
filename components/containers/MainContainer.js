import React from "react";
import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { colors } from "../../config/theme";
import { StatusBar } from "expo-status-bar";

const MainContainer = ({ children, style, ...props }) => {
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MainContainer;
