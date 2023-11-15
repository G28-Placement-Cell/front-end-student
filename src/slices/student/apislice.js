import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({ baseUrl: 'https://back-end-production-ee2f.up.railway.app/' });


export const apislice = createApi({
    baseQuery,
    tagTypes: ['Student'],
    endpoints: (builder) => ({

    }),
})
