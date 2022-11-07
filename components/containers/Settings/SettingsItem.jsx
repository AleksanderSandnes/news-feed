import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors } from '../../../config/theme';
import StyledText from '../Texts/StyledText';

const styles = StyleSheet.create({
  settingsItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    paddingHorizontal: 25,
    marginBottom: 2,
  },
  label: {
    fontStyle: 'italic',
  },
});

function SettingsItem({ children, label }) {
  const activeColors = colors;

  return (
    <View
      style={[
        {
          backgroundColor: activeColors.secondary,
        },
        styles.settingsItem,
      ]}
    >
      <StyledText style={[{ color: activeColors.tertiary }, styles.label]}>
        {label}
      </StyledText>
      {children}
    </View>
  );
}

export default SettingsItem;
