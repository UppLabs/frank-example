import { connect } from 'react-redux';
import { reset } from 'redux-form'
import { forgotPassword, searchProvider, getProviders } from '../actions';
import ConnectUtilityForm from '../components/ConnectUtilityForm';

const mapStateToProps = (state) => {
  return {
    errorStore: state.error,
    restoreCode: state.auth.restoreCode,
    loading: state.auth.loading,
    providers: state.data.providers
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: (values) => {
      dispatch(forgotPassword(values));
    },
    reset: () => {
      dispatch(reset('forgotPassword'));
    },
    searchProvider: (value) => {
      dispatch(searchProvider(value));
    },
    getProviders: () => {
      dispatch(getProviders());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectUtilityForm);