import { connect } from 'react-redux';
import { restorePassword } from '../actions';
import RestorePasswordForm from '../components/RestorePasswordForm';

const mapStateToProps = (state) => {
  return {
    errorStore: state.error,
    loading: state.auth.loading,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: (values) => {
      dispatch(restorePassword(values));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestorePasswordForm);