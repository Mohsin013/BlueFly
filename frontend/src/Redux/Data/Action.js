import { DESCRIPTION_DATA, SORTED_DATA, CART_DATA,PRODUCTS_DATA } from "./ActionTypes";

export const product_data = (dispatch,payload)=>{
  dispatch({
    type: PRODUCTS_DATA,
    payload,
  })
}

export const description_data = (dispatch, payload) => {
  dispatch({
    type: DESCRIPTION_DATA,
    payload,
  });
};

export const sorted_data = (dispatch, payload) => {
  dispatch({
    type: SORTED_DATA,
    payload,
  });
};

export const card_data = (dispatch, payload) => {
  dispatch({
    type: CART_DATA,
    payload,
  });
};
