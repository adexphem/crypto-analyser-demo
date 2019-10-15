import axios from 'axios';

import { GET_COINS, CHANGE_PAGE_SIZE } from './types';
import { API_BASE_URL } from '../settings/appSettings';

export const getCoins = data => async dispatch => {
  const result = { status: false, loading: true };

  try {
    const res = await axios.get(`${API_BASE_URL}?limit=${data}`, data);

    if (res && res.status === 200) {
      result.status = !result.status;
      result.loading = false;
      result.data = res.data;
    } else {
      result.data = [];
    }
  } catch (err) {
    result.loading = false;
  }

  dispatch({
    type: GET_COINS,
    payload: result
  });
};

export const changePageSize = data => async dispatch => {
  dispatch({
    type: CHANGE_PAGE_SIZE,
    payload: data
  });
};
