import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

const CardSection = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 10,
    //backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#02b3a4',
    position: 'relative'
  }
};

export { CardSection };

CardSection.propTypes = {
  children: PropTypes.element
}