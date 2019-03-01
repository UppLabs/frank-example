import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

const Tooltip = ({ children }) => {
  return (
    <View style={styles.tooltipStyle}>
      {children}
    </View>
  );
};

const styles = {
  tooltipStyle: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center'
  }
};

export { Tooltip };

Tooltip.propTypes = {
  children: PropTypes.element
}