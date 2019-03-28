import orderReducer from './orderReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
    order: orderReducer,
    firestore: firestoreReducer,
});

export default rootReducer;