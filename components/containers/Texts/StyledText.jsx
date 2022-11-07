import React from 'react';
import { Text } from 'react-native';
import { colors } from '../../../config/theme';

function StyledText({ children, style, small, big, bold, ...props }) {
  const activeColors = colors;

  return (
    <Text
      style={[
        {
          color: activeColors.tint,
          fontSize: small ? 14 : big ? 24 : 16,
          fontWeight: bold || big ? 'bold' : 'normal',
        },
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
}

export default StyledText;