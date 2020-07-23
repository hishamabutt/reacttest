import axios from 'axios';
import { ADD_PRODUCT, GET_SELECTED } from './types';

export const getSelected = () => async (dispatch) => {
  try {
    const res = await axios.get('http://localhost:3001/Clicked');
    dispatch({ type: GET_SELECTED, payload: res.data });
  } catch (err) {
    console.log(err);
  }
};

export const addProduct = (name, img, price) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify({ name, price, img });
  try {
    const res = await axios.post('http://localhost:3001/Clicked', body, config);
  } catch (err) {
    console.log(err);
  }
};

export const removeProducts = (id) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:3001/Clicked/${id}`);
    console.log('deleted');
  } catch (err) {
    console.log(err);
  }
};
