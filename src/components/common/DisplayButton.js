import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const DisplayButton = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;


  return (
    <TouchableOpacity
      style={buttonStyle}
      onPress={onPress}
    >
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#000',
    fontSize: 12,
    margin: 0,
    padding: 0,
    backgroundColor: 'transparent',
    textAlign: 'center'
  },
  buttonStyle: {
    borderRadius: 5,
    backgroundColor: '#f7f7f7',
    shadowColor: '#000',
    shadowOffset: { width: 3, height: 4 },
    shadowOpacity: .5,
    padding: 5,
    minHeight: 35,
    minWidth: 130,
    maxWidth: 150,
    alignItems: 'center',
    justifyContent: 'center',
  }
}

export { DisplayButton };


DisplayButton.propTypes = {
  onPress: PropTypes.func,
  children: PropTypes.array
}