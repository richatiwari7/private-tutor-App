import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  email: '',
  role: '',
  extraInfo: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.role = action.payload.role;
      state.extraInfo = action.payload.extraInfo;
    },
    clearUser: (state) => {
      state.name = '';
      state.email = '';
      state.role = '';
      state.extraInfo = '';
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;

