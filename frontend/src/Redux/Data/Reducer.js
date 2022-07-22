import axios from "axios";
import { useEffect } from "react";
// import data from "../../Data/data.json";



// import { loadCartData,saveData } from "../../Local/LocalStorage"
import { DESCRIPTION_DATA, SORTED_DATA, CART_DATA ,PRODUCTS_DATA} from "./ActionTypes";
const initState = {
  data: [],
  descriptionData: [],
  sortedData: [],
  cartData: [],
};


  // axios.get("http://localhost:8000/products/all").then(res => {
  //   initState.data = res.data;
  //   // console.log(res.data)
  // }).catch(err => {
  
  //   console.log(err,"err")
  
  // })

  console.log(initState.data)

export const dataReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case DESCRIPTION_DATA: {
      return {
        ...state,
        descriptionData: payload,
      };
    }

    case PRODUCTS_DATA: {
      return {
        ...state,
        data: payload,
      };
    }

    case SORTED_DATA: {
      return {
        ...state,
        sortedData: [...payload],
      };
    }

    case CART_DATA: {
      return {
        ...state,

        cartData: [...state.cartData, payload],
      };
    }

    default: {
      return state;
    }
  }
};
