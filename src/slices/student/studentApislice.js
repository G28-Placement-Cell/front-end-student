import { apislice } from "./apislice";

const student_url = 'api/student'

export const studentApislice = apislice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${student_url}/login`,
                method: 'POST',
                body: data,
                message: "ok"
            })
        }),
        logout: builder.mutation({
            query: () => ({
                url: `${student_url}/logout`,
                method: 'POST',
                message: "logged out"
            })
        }),
        register: builder.mutation({
            query: (data) => ({
                url: `${student_url}/register`,
                method: 'POST',
                body: data,
                message: "ok"
            })
        }),
        getdata: builder.mutation({
            query: (data) => ({
                url: `${student_url}/get_student_profile`,
                body: data,
                method: 'POST',
                message: "ok"
            })
        })
    })
})

export const { useLoginMutation, useLogoutMutation, useRegisterMutation, useGetdataMutation } = studentApislice;