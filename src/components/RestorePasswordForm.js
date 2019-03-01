import React, { Component } from 'react';
import { Text } from 'react-native';
import { reduxForm, Field } from 'redux-form';
import PropTypes from 'prop-types';

import {AuthLayout, TurqButton, Card, CardSection, Input, Spinner } from './common/Index';

class RestorePasswordForm extends Component {

  submit = (values) => {
    this.props.onSubmit(values);
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="small" />;
    }

    return (
      <TurqButton onPress={this.props.handleSubmit(this.submit)}>
        Submit
      </TurqButton>
    );
  }

  render() {
    return (
      <AuthLayout reset={this.props.reset} errorStore={this.props.errorStore}>
        <Card>
          <Text style={styles.loginTextStyle}>Restore Password</Text>
          <CardSection>
              <Field
                name="password"
                component={Input}
                iconType="key"
                secureTextEntry
                placeholder="Password"
              />
            </CardSection>

            <CardSection>
              <Field
                name="passwordConfirm"
                component={Input}
                iconType="key"
                secureTextEntry
                placeholder="Password"
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
  form: 'restorePassword',
  validate: (values) => {
    const errors = {};
    errors.password = !values.password
      ? 'Password field is required'
      : values.password.length < 6
      ? 'Password must be at least 6 characters long'
      : undefined;
    errors.passwordConfirm = values.password != values.passwordConfirm
      ? 'Passwords do not match'
      : undefined
    return errors;
  }
})(RestorePasswordForm);

RestorePasswordForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  errorStore: PropTypes.object.isRequired
}
