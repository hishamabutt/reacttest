import { GET_SELECTED } from '../actions/types';
const initialState = {
  selectedProducts: [],
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_SELECTED:
      return {
        ...state,
        selectedProducts: payload,
        loading: false,
      };

    default:
      return state;
  }
}
