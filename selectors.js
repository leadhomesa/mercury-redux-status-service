import {DOMAIN} from './constants';
import {fromJS} from 'immutable';

export const getStatus = (state, key) =>
  state[DOMAIN].get(key, fromJS({})).toJS();
