"use client";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  orderId: null,
};

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

export const cartSpinnerAsync = createAsyncThunk(
  "cart/fetchCartSpinner",
  async (initialPost) => {
    const response = await fetchCartSpinner(initialPost);
    return response.data;
  }
);

const findProductIndex = (products, prodId, prodSize, prodColor) =>
  products.findIndex(
    (product) =>
      product.prodId === parseInt(prodId) &&
      product.prodSize === prodSize &&
      product.prodColor === prodColor
  );

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    productAdded(state, action) {
      const {
        prodId,
        prodImage,
        prodQtee,
        prodQteeDisp,
        prodPrix,
        prodSize,
        prodColor,
      } = action.payload;

      const isValidProduct = () =>
        prodId !== undefined &&
        prodId !== null &&
        prodImage !== undefined &&
        prodImage !== null &&
        prodQtee !== undefined &&
        prodQtee !== null &&
        prodQtee > 0 &&
        prodQteeDisp !== undefined &&
        prodQteeDisp !== null &&
        prodQteeDisp > 0 &&
        prodPrix !== undefined &&
        prodPrix !== null &&
        prodPrix > 0 &&
        prodSize &&
        prodSize !== "Sélectionner" &&
        prodColor &&
        prodColor !== "Sélectionner";

      if (!isValidProduct()) {
        console.warn("Invalid product data; product not added.");
        return;
      }

      const productIndex = findProductIndex(
        state.products,
        prodId,
        prodSize,
        prodColor
      );

      if (productIndex !== -1) {
        state.products[productIndex] = {
          ...state.products[productIndex],
          prodImage,
          prodQtee,
          prodQteeDisp,
          prodPrix,
        };
      } else {
        state.products.push(action.payload);
      }
    },
    productUpdated(state, action) {
      const { prodId, prodSize, prodColor, prodQuantity } = action.payload;

      const productIndex = findProductIndex(
        state.products,
        prodId,
        prodSize,
        prodColor
      );

      if (productIndex !== -1) {
        state.products[productIndex].prodQtee = prodQuantity;
      } else {
        console.warn(
          `Product with ID ${prodId}, size ${prodSize}, and color ${prodColor} not found.`
        );
      }
    },

    productRemoved: (state, action) => {
      const { prodId, prodSize, prodColor } = action.payload;

      const productIndex = findProductIndex(
        state.products,
        prodId,
        prodSize,
        prodColor
      );

      if (productIndex !== -1) {
        state.products.splice(productIndex, 1);
      } else {
        console.warn(
          `Product with ID ${prodId}, size ${prodSize}, and color ${prodColor} not found.`
        );
      }
    },

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
