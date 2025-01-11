import { configureStore } from '@reduxjs/toolkit';
// import bitcoinReducer from './features/bitcoinSlice';
import bitcoinReducer from './feature/bitcoinSlice'
// import trendingCoinsReducer from './features/trendingCoinsSlice';
import trendingCoinsReducer from './feature/trendingCoinsSlice'

const store = configureStore({
  reducer: {
    bitcoin:  bitcoinReducer,
    trendingCoins: trendingCoinsReducer,
  },
});

export default store;