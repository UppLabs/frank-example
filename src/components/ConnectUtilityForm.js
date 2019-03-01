import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { reduxForm, Field } from 'redux-form';
import PropTypes from 'prop-types';

import { AuthLayout, TurqButton, Card, CardSection, Input, Spinner, AutocompleteInput } from './common/Index';
import { Actions } from 'react-native-router-flux';

class ConnectUtilityForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ''
    };
  }
  componentDidMount() {
    this.props.getProviders();
  }

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
    const { headerTextStyle, formHeaderTextStyle, buttonSectionStyle } = styles;

    return (
      <AuthLayout reset={this.props.reset} errorStore={this.props.errorStore}>
        <Card>
          <Text style={headerTextStyle}>Connect Your Utility</Text>
        </Card>
        <Card>
          <Text style={formHeaderTextStyle}>Select Your Provider </Text>
          <CardSection>
            <Field
              name="search"
              component={AutocompleteInput}
              placeholder="Search"
              iconType="search"
              data={this.props.providers}
            />
          </CardSection>
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
        <View style={buttonSectionStyle}>
          <TurqButton onPress={() => Actions.account()}>
              Skip For Now {'>'}
          </TurqButton>
        </View>
      </AuthLayout>
    );
  }
}

const styles = {
  headerTextStyle: {
    fontSize: 20,
    fontWeight: '800',
    alignSelf: 'center',
    paddingBottom: 15,
    paddingTop: 20,
  },
  formHeaderTextStyle: {
    fontSize: 18,
    fontWeight: '400',
    alignSelf: 'center',
    paddingBottom: 10,
    paddingTop: 20,
  },
  buttonSectionStyle: {
    position: 'relative',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: 20,
  }
};

export default reduxForm({
  form: 'connectUtilityForm',
  validate: (values) => {
    console.log(values);
    const errors = {};
    errors.search = !values.search 
      ? 'Search field is required' 
      : undefined;
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
})(ConnectUtilityForm);


ConnectUtilityForm.propTypes = {
  onSubmit: PropTypes.func,
  loading: PropTypes.bool,
  handleSubmit: PropTypes.func,
  reset: PropTypes.func,
  errorStore: PropTypes.object,
  searchProvider: PropTypes.func,
  getProviders: PropTypes.func,
  providers: PropTypes.array
}