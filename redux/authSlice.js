import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false,
    email: null,
}

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        loginUserState: (state, action) =>{
            state.isAuthenticated = true;
            state.user =action.payload;
        },
        logout: (state) =>{
            state.isAuthenticated = false;
            state.user = null;
        },
    },
});

export const {loginUserState, logout} = authSlice.actions;
export default authSlice.reducer;