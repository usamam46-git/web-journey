import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    email: '',
    image: null
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setImage: (state, action) => {
      state.image = action.payload;
    }
  }
});

export const { setName, setEmail, setImage } = userSlice.actions;
export default userSlice.reducer;