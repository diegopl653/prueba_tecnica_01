import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: "",
  email: "",
}
export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const {name, email} = action.payload;
      state.name  = name;
      state.email = email;
    },
    changeEmail: (state, action) => {
      state.email = action.payload
    }
  }

});

export const { addUser, changeEmail } = dataSlice.actions;
export default dataSlice.reducer;



// name: 'auth',
//   initialState: {
//     user: null,
//     isLoading: false,
//     error: null,
//   },
//   reducers: {
//     setUser: (state, action) => {
//       state.user = action.payload;
//     },
//     setLoading: (state, action) => {
//       state.isLoading = action.payload;
//     },
//     setError: (state, action) => {
//       state.error = action.payload;
//     },
//     clearError: (state) => {
//       state.error = null;
//     },
//   },