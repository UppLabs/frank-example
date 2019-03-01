import React, { Component } from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';

import { AuthLayout, TurqButton, Card, CardSection, Input, Spinner } from './common/Index';

class LoginForm extends Component {

  submit = (values) => {
    this.props.onSubmit(values);
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="small" />;
    }

    return (
      <TurqButton onPress={this.props.handleSubmit(this.submit)}>
        Sign In
      </TurqButton>
    );
  }

  render() {
    return (
      <AuthLayout reset={this.props.reset} errorStore={this.props.errorStore}>
          <Card>
          <Text style={styles.loginTextStyle}>Sign In</Text>
            <CardSection>
              <Field
                name="email"
                component={Input}
                placeholder="E-mail"
                iconType="user"
              />
            </CardSection>

            <CardSection>
              <Field
                name="password"
                component={Input}
                secureTextEntry
                placeholder="Password"
                iconType="key"
              />
            </CardSection>
            <CardSection>
              {this.renderButton()}
            </CardSection>
          </Card>
      </AuthLayout>
    );
  }
}

const styles = {
  loginTextStyle: {
    fontSize: 26,
    fontWeight: '400',
    alignSelf: 'center',
    paddingBottom: 20,
    paddingTop: 20,
  }
};

export default reduxForm({
  form: 'logIn',
  validate: (values) => {
    const errors = {};
    errors.email = !values.email 
      ? 'E-mail field is required' 
      : (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))
      ? 'E-mail is not valid'
      : undefined;
    errors.password = !values.password
      ? 'Password field is required'
      : undefined;
    return errors;
  }
})(LoginForm);


LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  errorStore: PropTypes.object.isRequired
}