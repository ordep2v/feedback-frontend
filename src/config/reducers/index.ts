import { Reducer } from 'react';
import {
  PERSON_CREATE_FAIL,
  PERSON_CREATE_REQUEST,
  PERSON_CREATE_SUCCESS,
} from '../constants';

const reducer: Reducer<any, any> = (
  action: { type: string; payload: string },
  state = {},
) => {
  switch (action.type) {
    case PERSON_CREATE_REQUEST:
      return { loading: true };
    case PERSON_CREATE_SUCCESS:
      return { loading: false, person: action.payload, success: true };
    case PERSON_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export default reducer;
