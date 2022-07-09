import { createSlice } from '@reduxjs/toolkit';

type StateProps = {};

const RootSlice = createSlice({
  name: 'root',
  initialState: {} as StateProps,
  reducers: {}
});

export const {} = RootSlice.actions;

export default RootSlice.reducer;
