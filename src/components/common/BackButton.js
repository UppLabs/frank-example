import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';

const BackButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
        <Image source={require('../../img/back.png')} />
    </TouchableOpacity>
  );
};

export { BackButton };

const styles = {
    buttonStyle: {
        position: 'absolute',
        padding: 20,
        paddingTop: 40,
    }
}

BackButton.propTypes = {
    onPress: PropTypes.func
}
