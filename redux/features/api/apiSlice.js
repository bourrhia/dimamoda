"use client";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { HYDRATE } from "next-redux-wrapper";

// Define our single API slice object
export const apiSlice = createApi({
  // The cache reducer expects to be added at `state.api` (already default - this is optional)
  reducerPath: "api",
  // All of our requests will have URLs starting with '/api'
  //baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  baseQuery: fetchBaseQuery({ baseUrl: process.env.VERCEL_URL }),
  //tagTypes: ["User", "Orders"],
  tagTypes: ["Orders"],
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  // The "endpoints" represent operations and requests for this server
  endpoints: (builder) => ({
    addOrders: builder.mutation({
      query: (orders) => ({
        url: "/api/orders/addOrders",
        method: "POST",
        //body: orders,JSON.stringify(initialPost),
        // body: JSON.stringify(orders),
        body: JSON.stringify(orders),
      }),
      invalidatesTags: ["Orders"],
    }),

    getOrderShipAdr: builder.query({
      query: (orderId) => ({
        url: `/api/orders/getOrderShipAdr/${orderId}`,
        // url: "/api/orders/getOrderShipAdr",
        method: "GET",
        //body: JSON.stringify(orderId),
        // body: orderId,
      }),
      providesTags: ["Orders"],
    }),

    getOrderNumber: builder.query({
      query: (orderId) => ({
        url: `/api/orders/getOrderNumber/${orderId}`,
        // url: "/api/orders/getOrderNumber",
        method: "GET",
        // body: orderId,
      }),
      providesTags: ["Orders"],
    }),

    updateOrder: builder.mutation({
      query: (order) => ({
        url: "/api/orders/updateOrder",
        method: "POST",
        //body: orders,JSON.stringify(initialPost),
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

// Export the auto-generated hook for the `addDeliveryAddress` mutation endpoint
export const {
  useAddOrdersMutation,
  useGetOrderNumberQuery,
  useGetOrderShipAdrQuery,
  useUpdateOrderMutation,
  useGetAllProductsQuery,
  useGetPrdtsByTermQuery,
} = apiSlice;
