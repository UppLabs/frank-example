import React from 'react';
import { View, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import PropTypes from 'prop-types';

import { BackButton, Error } from './Index';

const AuthLayout = ({ reset, errorStore, children }) => {
    return (
      <KeyboardAwareScrollView style={styles.viewStyle} contentContainerStyle={styles.containerStyle}>
        <View>
          <BackButton onPress={() => { reset(); Actions.start() }} />
          <Image style={styles.imgStyle} source={require('../../img/logo.png')} alt="Frank's logo" />
          <Error errorStore={errorStore} />
        </View>
        <View style={styles.formStyle}>
            {children}
        </View>
      </KeyboardAwareScrollView>
    );
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  },
  viewStyle: {
    backgroundColor: '#123c66'
  },
  imgStyle: {
    alignSelf: 'center',
    marginTop: 60,
    height: 50,
    width: 50
  },
  containerStyle: {
    flex: 1
  },
  formStyle: {
    paddingBottom: 40, 
    flex: 1, 
    justifyContent: 'center'
  }
};

export { AuthLayout };

AuthLayout.propTypes = {
  reset: PropTypes.func,
  errorStore: PropTypes.object,
  children: PropTypes.oneOfType([ PropTypes.object, PropTypes.array ]),
}
