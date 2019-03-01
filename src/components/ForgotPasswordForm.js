import React, { Component } from 'react';
import { Text } from 'react-native';
import { reduxForm, Field } from 'redux-form';
import PropTypes from 'prop-types';

import { AuthLayout, TurqButton, Card, CardSection, Input, Spinner } from './common/Index';

class ForgotPasswordForm extends Component {

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
          <Text style={styles.loginTextStyle}>Forgot Password</Text>
          <CardSection>
            <Field
              name="email"
              component={Input}
              placeholder="E-mail"
              iconType="user"
            />
          </CardSection>

          { this.props.restoreCode  
          ? <CardSection>
              <Field
                name="code"
                component={Input}
                placeholder="Code"
                iconType="key"
              />
            </CardSection> 
          : null}

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
  form: 'forgotPassword',
  validate: (values) => {
    const errors = {};
    errors.email = !values.email 
      ? 'E-mail field is required' 
      : (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))
      ? 'E-mail is not valid'
      : undefined;
    errors.code = !values.code
      ? 'Code field is required'
      : undefined;
    return errors;
  }
})(ForgotPasswordForm);

ForgotPasswordForm.propTypes = {
  onSubmit: PropTypes.func,
  loading: PropTypes.bool,
  handleSubmit: PropTypes.func,
  reset: PropTypes.func,
  errorStore: PropTypes.object,
  restoreCode: PropTypes.string
}