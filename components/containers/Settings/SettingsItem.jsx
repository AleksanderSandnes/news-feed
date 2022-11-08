import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { colors } from '../../../config/theme';
import StyledText from '../Texts/StyledText';
import { ThemeContext } from '../../../contexts/ThemeContext';

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
  const { theme } = useContext(ThemeContext);
  const activeColors = colors[theme.mode];

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
