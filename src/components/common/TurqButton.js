import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const TurqButton = ({ onPress, children }) => {
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
    color: '#fff',
    fontSize: 16,
    fontWeight: '800',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#02b3a4',
    borderRadius: 10,
    marginLeft: 5,
    marginRight: 5
  }
};

export { TurqButton };