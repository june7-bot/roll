import { combineReducers } from 'redux';
import user from './user_reducer';
import dog from './dog_reducers';

const rootReducer = combineReducers({
    user, dog
});

export default rootReducer;