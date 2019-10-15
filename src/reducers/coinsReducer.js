import { GET_COINS, CHANGE_PAGE_SIZE } from '../actions/types';
import { DEFAULT_PAGE_SIZE } from '../settings/appSettings';

const initialState = {
  coins: [],
  pageSize: DEFAULT_PAGE_SIZE
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_COINS:
      return {
        ...state,
        coins: action.payload
      };
    case CHANGE_PAGE_SIZE:
      return {
        ...state,
        pageSize: action.payload
      };
    default:
      return state;
  }
}
