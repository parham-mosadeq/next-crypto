import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const coinsApi = createApi({
  reducerPath: 'coingeko',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.coingecko.com/api/v3/coins/',
  }),
  endpoints: (builder) => ({
    getCoins: builder.query({
      query: (pageCount) =>
        `markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=${pageCount}&sparkline=false`,
    }),
  }),
});

export const { getCoins } = coinsApi;
