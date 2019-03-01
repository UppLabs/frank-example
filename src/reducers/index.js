import { combineReducers } from 'redux';
import { reducer as reduxFormReducer} from 'redux-form';
import auth from './auth';
import error from './error';
import data from './data';

const reducers = combineReducers({
    auth,
    error,
    form: reduxFormReducer,
    data: data
});

export default reducers;