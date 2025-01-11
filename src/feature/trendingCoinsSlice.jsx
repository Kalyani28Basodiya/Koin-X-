import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTrendingCoins = createAsyncThunk('trendingCoins/fetchTrending', async () => {
  const response = await axios.get('https://api.coingecko.com/api/v3/search/trending');
  return response.data.coins;
});

const trendingCoinsSlice = createSlice({
  name: 'trendingCoins',
  initialState: { data: [], status: 'idle' },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrendingCoins.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTrendingCoins.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchTrendingCoins.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default trendingCoinsSlice.reducer;
