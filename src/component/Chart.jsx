import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import styled from 'styled-components';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import axios from 'axios';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Styled components for the chart
const ChartContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background: #ffffff;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const ChartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  h2 {
    font-size: 20px;
    color: #333;
    margin: 0;
  }

  span {
    font-size: 14px;
    color: #666;
  }
`;

const ChartWrapper = styled.div`
  height: 400px;
`;

const ChartComponent = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart',
          {
            params: {
              vs_currency: 'usd',
              days: '7',
            },
          }
        );

        const prices = response.data.prices.map((price) => price[1]);
        const labels = response.data.prices.map((price) =>
          new Date(price[0]).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
          })
        );

        setChartData({
          labels,
          datasets: [
            {
              label: 'Bitcoin Price (USD)',
              data: prices,
              borderColor: '#1E90FF',
              backgroundColor: 'rgba(30, 144, 255, 0.1)',
              borderWidth: 2,
              tension: 0.4,
              pointRadius: 0,
            },
          ],
        });
      } catch (error) {
        console.error('Error fetching chart data:', error);
      }
    };

    fetchData();
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#A9A9A9',
        },
      },
      y: {
        grid: {
          color: '#EAEAEA',
        },
        ticks: {
          color: '#A9A9A9',
        },
      },
    },
  };

  return (
    <ChartContainer>
      <ChartHeader>
        <h2>Bitcoin Price Chart (USD)</h2>
        <span>Last 7 Days</span>
      </ChartHeader>
      <ChartWrapper>
        {chartData ? (
          <Line data={chartData} options={options} />
        ) : (
          <p>Loading chart data...</p>
        )}
      </ChartWrapper>
    </ChartContainer>
  );
};

export default ChartComponent;
