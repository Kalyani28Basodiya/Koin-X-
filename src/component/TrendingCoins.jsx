import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTrendingCoins } from '../feature/trendingCoinsSlice';
// import { fetchTrendingCoins } from '../features/trendingCoinsSlice';

const TrendingCoins = () => {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.trendingCoins);

  useEffect(() => {
    dispatch(fetchTrendingCoins());
  }, [dispatch]);

  return (
    <div>
      <h3>Trending Coins (24H)</h3>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'succeeded' &&
        data.map((coin, index) => (
          <div key={index}>
            <img src={coin.item.small} alt={coin.item.name} />
            <p>
              {coin.item.name} ({coin.item.symbol})
            </p>
          </div>
        ))}
    </div>
  );
};

export default TrendingCoins;
