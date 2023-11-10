// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     studentInfo: localStorage.getItem('studentInfo') ? JSON.parse(localStorage.getItem('studentInfo')) : null,
// }

// const authSlice = createSlice({
//     name: 'auth',
//     initialState,
//     reducers: {
//         setcred(state, action) {
//             state.studentInfo = action.payload;
//             localStorage.setItem('studentInfo', JSON.stringify(action.payload));
//         },
//         logout(state) {
//             state.studentInfo = null;
//             localStorage.removeItem('studentInfo');
//         }
//     }
// })

// export const { setcred, logout } = authSlice.actions;
// export default authSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    studentInfo: localStorage.getItem('studentInfo')
        ? JSON.parse(localStorage.getItem('studentInfo'))
        : null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            state.studentInfo = action.payload;
            state.token = action.payload.token;
            localStorage.setItem('studentInfo', JSON.stringify(action.payload));
            localStorage.setItem('token', action.payload.token);
        },
        getCredentials: (state, action) => {
            state.studentInfo = localStorage.getItem('studentInfo')
                ? JSON.parse(localStorage.getItem('studentInfo'))
                : null;
        },
        logout: (state, action) => {
            state.studentInfo = null;
            localStorage.removeItem('studentInfo');
            localStorage.removeItem('token');
        },
        getData: (state, action) => {
            localStorage.getItem('studentinfo.student_id');
        },
        setReset: (state, action) => {
            state.resetInfo = action.payload.payload;
            localStorage.setItem('resetId', (action.payload.payload.reset._id));
        },
        removeReset: (state, action) => {
            state.resetInfo = null;
            localStorage.removeItem('resetId');
        },
    },
});

export const { setCredentials, logout, setReset, removeReset } = authSlice.actions;

export default authSlice.reducer;