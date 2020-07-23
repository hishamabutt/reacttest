import axios from 'axios';
import { GET_PRODUCTS } from './types';

export const getProducts = () => async (dispatch) => {
  try {
    const res = await axios.get('http://localhost:3001/products');
    dispatch({ type: GET_PRODUCTS, payload: res.data });
  } catch (err) {
    console.log(err);
  }
};
