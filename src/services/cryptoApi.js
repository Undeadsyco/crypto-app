import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
  'x-rapidapi-key': 'd80bccf291mshd25998dc4c01216p11dbfdjsn44ca9614c49f'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = url => ({
  url,
  headers: cryptoApiHeaders
})

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`)
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`)
    }),
    getCryptoHistory: builder.query({
      query: ({coinId, timePeriod}) => createRequest(`/coin/${coinId}/history/${timePeriod}`)
    }),
    getCryptoExchanges: builder.query({
      query: () => createRequest(`/exchanges`)
    }) 
  })
})

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
  useGetCryptoExchangesQuery
} = cryptoApi;