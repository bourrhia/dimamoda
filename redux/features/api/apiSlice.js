"use client";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.VERCEL_URL }),

  tagTypes: ["Orders"],
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },

  endpoints: (builder) => ({
    addOrders: builder.mutation({
      query: (orders) => ({
        url: "/api/orders/addOrders",
        method: "POST",
        body: JSON.stringify(orders),
      }),
      invalidatesTags: ["Orders"],
    }),

    getOrderShipAdr: builder.query({
      query: (orderId) => ({
        url: `/api/orders/getOrderShipAdr/${orderId}`,
        method: "GET",
      }),
      providesTags: ["Orders"],
    }),

    getOrderNumber: builder.query({
      query: (orderId) => ({
        url: `/api/orders/getOrderNumber/${orderId}`,
        method: "GET",
      }),
      providesTags: ["Orders"],
    }),

    updateOrder: builder.mutation({
      query: (order) => ({
        url: "/api/orders/updateOrder",
        method: "POST",
        body: JSON.stringify(order),
      }),
      invalidatesTags: ["Orders"],
    }),

    getAllProducts: builder.query({
      query: () => ({
        url: "/api/fuzzySearch/getAllPrdts/",
        method: "GET",
      }),
    }),

    getPrdtsByTerm: builder.query({
      query: (searchTerm) => ({
        url: `/api/fuzzySearch/getPrdtsBySearch/${searchTerm}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useAddOrdersMutation,
  useGetOrderNumberQuery,
  useGetOrderShipAdrQuery,
  useUpdateOrderMutation,
  useGetAllProductsQuery,
  useGetPrdtsByTermQuery,
} = apiSlice;
