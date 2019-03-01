import React from 'react';
import { TextInput, View, Text } from 'react-native';
import { Icon } from './Icon';
import PropTypes from 'prop-types';

const Input = (props) => {
  const { inputStyle, labelStyle, containerStyle } = styles;
  const { label, placeholder, secureTextEntry, iconType, input, meta } = props;

  const isInvalid = () => {
    if(meta.touched && !meta.active && meta.error) {
      return (
        <Text style={styles.errorTextStyle} adjustsFontSizeToFit={true}>
          {meta.error}
        </Text>
      );
    }
    return null;
  };
  
  return (
    <View style={containerStyle}>
      { label ? <Text style={labelStyle}>{label}</Text> : null}
      <Icon name={iconType} />
      <TextInput
        secureTextEntry={secureTextEntry}
        autoCorrect={false}
        style={inputStyle}
        value={input.value}
        onFocus={input.onFocus}
        onBlur={input.onBlur}
        onChangeText={input.onChange}
        autoCapitalize = 'none'
        placeholder={placeholder}
      />
      {isInvalid()}
    </View>
  );
};

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 1,
  },
  labelStyle: {
    fontSize: 18,
    flex: 1
  },
  containerStyle: {
    flex: 1,
    flexDirection: 'row',
  },
  errorTextStyle: {
    flex: 1,
    fontSize: 13,
    color: 'red',
    marginLeft: -10,
    textAlign: 'center'
  }
};

export { Input };

Input.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  iconType: PropTypes.string,
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired
}
