import {fromJS} from 'immutable';
import {handleActions} from 'redux-actions';
import {
  DOMAIN,
  FETCH,
  FETCHED,
  ERROR
} from './constants';

const reducer = handleActions({

  [FETCH]: (state, {key}) =>
    state.set(key, fromJS({
      isFetching: true
    })),

  [FETCHED]: (state, {key}) =>
    state.set(key, fromJS({
      fetchedAt: new Date()
    })),

  [ERROR]: (state, {key, errorMessage}) =>
    state.set(key, fromJS({
      hasError: errorMessage
    })),


}, fromJS({ }));

export default {
  [DOMAIN]: reducer
};
