import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBitcoinPrice } from '../feature/bitcoinSlice';
import Header from './Header';
import ChartComponent from './Chart';
import AboutBitcoin from './AboutBitcoin';
// import Performance from './Performance';
// import { fetchBitcoinPrice } from '../features/bitcoinSlice';

const BitcoinPrice = () => {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.bitcoin);

  useEffect(() => {
    dispatch(fetchBitcoinPrice());
  }, [dispatch]);

  return (
    <div>
        <Header/>
        <ChartComponent/>
        {/* <Performance/> */}
        <AboutBitcoin/>
      <h2>Bitcoin Price</h2>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'succeeded' && data && (
        <div>
          <p>USD: ${data.usd}</p>
          <p>INR: ₹{data.inr}</p>
          <p>24H Change: {data.usd_24h_change.toFixed(2)}%</p>
        </div>
      )}
    </div>
  );
};

export default BitcoinPrice;
