import React, { useState } from 'react';
import { StyleSheet, View, Switch } from 'react-native';

// components
import MainContainer from '../components/containers/MainContainer';
import StyledText from '../components/containers/Texts/StyledText';
import SettingsItem from '../components/containers/Settings/SettingsItem';
import SettingsButton from '../components/containers/Settings/SettingsButton';
import { colors } from '../config/theme';

const styles = StyleSheet.create({
  container: {
    padding: 25,
  },
  section: {
    borderRadius: 30,
    overflow: 'hidden',
    marginTop: 25,
    marginBottom: 25,
  },
});

export default function Settings() {
  const activeColors = colors;
  const [isActive, setIsActive] = useState(false);

  const handleSwitch = () => {
    setIsActive((previousState) => !previousState);
  };

  return (
    <MainContainer style={styles.container}>
      <StyledText style={{ color: activeColors.accent }} bold>
        User
      </StyledText>

      <View style={styles.section}>
        <SettingsItem label="Name">
          <StyledText>Richard Barnes</StyledText>
        </SettingsItem>
        <SettingsItem label="Joined On">
          <StyledText>07 / 10 /22</StyledText>
        </SettingsItem>
      </View>

      <StyledText style={{ color: activeColors.accent }} bold>
        Theme Switch
      </StyledText>

      <View style={styles.section}>
        <SettingsItem label="Dark Mode">
          <Switch
            value={isActive}
            onValueChange={handleSwitch}
            thumbColor={isActive ? activeColors.accent : activeColors.tertiary}
            ios_backgroundColor={activeColors.primary}
            trackColor={{
              false: activeColors.primary,
              true: activeColors.tertiary,
            }}
          />
        </SettingsItem>
      </View>

      <StyledText style={{ color: activeColors.accent }} bold>
        Theme Settings
      </StyledText>

      <View style={styles.section}>
        <SettingsButton label="Light" icon="lightbulb-on" isActive={false} />
        <SettingsButton label="Dark" icon="weather-night" isActive={false} />
        <SettingsButton
          label="System"
          icon="theme-light-dark"
          isActive={false}
        />
      </View>
    </MainContainer>
  );
}
