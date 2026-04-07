import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const limitlessApi = createApi({
  reducerPath: "limitlessApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://play.limitlesstcg.com/api/" }),
  endpoints: (builder) => ({
    getSceptileExDecks: builder.query({
      query: () => "decks?format=EX&cards=Sceptile&limit=100", // fetch all EX decks with Sceptile
    }),
  }),
});

export const { useGetSceptileExDecksQuery } = limitlessApi;
