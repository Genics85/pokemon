import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({}),

  tagTypes: ["Pokemon"],

  endpoints: (builder) => ({
    getPokemons: builder.query<any, void>({
      query: () => ({
        url: "https://pokeapi.co/api/v2/pokemon?limit=500",
        method: "GET",
      }),
    }),
    getPokemonDetails: builder.query({
      query: (detailsUrl) => ({
        url: detailsUrl,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetPokemonDetailsQuery, useGetPokemonsQuery } = pokemonApi;
