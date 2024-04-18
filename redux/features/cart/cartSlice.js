"use client";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
//import { fetchCartSpinner } from "./cartSpinnerApi";
//import { fetchCartDropdown } from "./cartDropdownApi";
//
//import { PURGE } from "redux-persist";
//import { HYDRATE } from "next-redux-wrapper";

//import { current } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  orderId: null,
};
/////////////////
async function fetchCartSpinner(initialPost) {
  const response = await fetch("/api/cart/cartspinner", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(initialPost),
  });

  const result = await response.json();

  return result;
}

//////////////////

export const cartSpinnerAsync = createAsyncThunk(
  "cart/fetchCartSpinner",
  async (initialPost) => {
    // console.log("cartSpinnerAsync initialPost:", initialPost);
    const response = await fetchCartSpinner(initialPost);
    // console.log("cartSpinnerAsync response:", response);
    // console.log("cartSpinnerAsync response.data:", response.data);
    return response.data;
    // return response;
  }
);

/*export const cartDropdownAsync = createAsyncThunk(
  "cart/fetchCartDropdown",
  async (initialPost, { dispatch }) => {
    const response = await fetchCartDropdown(initialPost);
    // The value we return becomes the `fulfilled` action payload
    // dispatch(productUpdated(initialPost));

    dispatch(productUpdated(initialPost));
    return response.data;
  }
);*/

const cartSlice = createSlice({
  name: "cart",
  //initialState: [],
  initialState,
  reducers: {
    productAdded(state, action) {
      const productExists = state.products.find(
        (item) => item.prodId === parseInt(action.payload.prodId)
      );

      if (productExists) {
        productExists.prodQtee = action.payload.prodQtee;
      } else {
        state.products.push(action.payload);
      }
    },
    productUpdated(state, action) {
      //const { prodId, prodQuantity } = action.payload;
      const { prodId } = action.payload;

      const existingProduct = state.products.find(
        (product) => product.prodId === parseInt(prodId)
      );

      if (existingProduct) {
        existingProduct.prodQtee = action.payload.prodQuantity;
      }
    },

    productRemoved: (state, action) => {
      const index = state.products.findIndex(
        (product) => product.prodId === parseInt(action.payload.prodId)
      );
      state.products.splice(index, 1);
    },
    //////////
    orderRemoved: (state) => {
      return {
        ...state,
        orderId: null,
      };
    },
    allProductRemoved: (state) => {
      return {
        ...state,
        products: [],
        orderId: null,
      };
    },
    setOrderNumber: (state, action) => {
      return {
        ...state,
        orderId: action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(cartSpinnerAsync.pending, (state, { meta }) => {
        let index = state.products
          ? state.products.map((item) => item.prodId).indexOf(meta.arg.prodId)
          : -1;
        if (index !== -1) {
          state.products[index].status = "loading";
        }
      })
      .addCase(cartSpinnerAsync.fulfilled, (state, action) => {
        let idProductAction = action.payload.prodId;
        var index = state.products
          ? state.products.map((item) => item.prodId).indexOf(idProductAction)
          : -1;
        if (index !== -1) {
          state.products[index].status = "idle";
          state.products[index].prodQtee = action.payload.prodQuantity;
        }
      });
    //.addCase(cartDropdownAsync.fulfilled, (state, action) => {
    // state.status = "testidle";
    // state.products[index].status = "idle";
    // })
    //  .addCase(PURGE, (state) => {
    //  customEntityAdapter.removeAll(state);
    //});
  },
});

export const {
  productAdded,
  productUpdated,
  productRemoved,
  allProductRemoved,
  setOrderNumber,
  orderRemoved,
} = cartSlice.actions;

export default cartSlice.reducer;
