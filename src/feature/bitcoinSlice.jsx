import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchBitcoinPrice = createAsyncThunk('bitcoin/fetchPrice', async () => {
  const response = await axios.get(
    'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd,inr&include_24hr_change=true'
  );
  return response.data.bitcoin;
});

const bitcoinSlice = createSlice({
  name: 'bitcoin',
  initialState: { data: null, status: 'idle' },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBitcoinPrice.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBitcoinPrice.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchBitcoinPrice.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default bitcoinSlice.reducer;
