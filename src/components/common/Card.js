import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

const Card = ({ children }) => {
  return (
    <View style={styles.containerStyle}>
      {children}
    </View>
  );
}


const styles = {
  containerStyle: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 10,
    borderRadius: 5,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#fff',
  }
};

export { Card };

Card.propTypes = {
  children: PropTypes.oneOfType([PropTypes.any, PropTypes.object])
}