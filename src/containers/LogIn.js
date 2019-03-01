import { connect } from 'react-redux';
import { reset } from 'redux-form'
import { login } from '../actions';
import LoginForm from '../components/LoginForm';

const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
    errorStore: state.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: (values) => {
      dispatch(login(values));
    },
    reset: () => {
      dispatch(reset('logIn'));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);