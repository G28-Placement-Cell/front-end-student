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
                message: "ok",
            })
        }),
        getdata: builder.mutation({
            query: (data) => ({
                url: `${student_url}/get_student_profile`,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                },
                method: 'GET',
                message: "ok"
            }),
        }),
        upload: builder.mutation({
            query: (data) => ({
                url: `${student_url}/files`,
                method: 'POST',
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                body: data,
                message: "ok"
            })
        }),
        change_password: builder.mutation({
            query: (data) => ({
                url: `${student_url}/change_password`,
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                },
                body: data,
                message: "ok"
            })
        }),
    })
})

export const { useLoginMutation, useLogoutMutation, useRegisterMutation, useGetdataMutation, useUploadMutation, useChange_passwordMutation } = studentApislice;