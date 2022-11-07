import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
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
  labelGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 15,
  },
});

function SettingsButton({ label, icon, isActive, ...props }) {
  const activeColors = colors;

  return (
    <TouchableOpacity
      style={[
        { backgroundColor: activeColors.secondary },
        styles.SettingsButton,
      ]}
      {...props}
    >
      <View style={styles.labelGroup}>
        <MaterialCommunityIcons
          name={icon}
          size={24}
          color={activeColors.tertiary}
          style={styles.icon}
        />
        <StyledText style={[{ color: activeColors.tertiary }, styles.label]}>
          {label}
        </StyledText>
      </View>

      <MaterialCommunityIcons
        name={
          isActive ? 'checkbox-marked-circle' : 'checkbox-blank-circle-outline'
        }
        size={24}
        color={isActive ? activeColors.accent : activeColors.tertiary}
      />
    </TouchableOpacity>
  );
}

export default SettingsButton;
