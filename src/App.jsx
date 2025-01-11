
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BitcoinPrice from './component/BitcoinPrice';
import TrendingCoins from './component/TrendingCoins';
// import Header from './component/Header';


function App() {

  return (
    <>
      <Router>
        <div>
          <Routes>
            {/* <Route path='/' element={<Header />} /> */}
            <Route path="/" element={<BitcoinPrice />} />
            <Route path="/trending" element={<TrendingCoins />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
