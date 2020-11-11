import { combineReducers } from 'redux';
import user from './user_reducer';
import dog from './dog_reducers';
import message from './message_reducer';

const rootReducer = combineReducers({
    user, dog, message,
});

export default rootReducer;