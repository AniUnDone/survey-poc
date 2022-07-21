
import reducer from '../reducers/reducer';
import {applyMiddleware, compose, createStore} from 'redux';
import ReduxThunk from 'redux-thunk';

const middlewares = [ReduxThunk];

const store = createStore(
    reducer,
  compose(applyMiddleware(...middlewares)),
);
export default store;
