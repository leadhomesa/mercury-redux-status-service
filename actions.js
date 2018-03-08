import {
  FETCH,
  FETCHED,
  ERROR
} from './constants';

export const fetch = key => ({
  type: FETCH,
  key
});

export const fetched = key => ({
  type: FETCHED,
  key
});

export const error = (key, errorMessage) => ({
  type: ERROR,
  key,
  errorMessage
});
