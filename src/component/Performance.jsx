import React from 'react';
import styled from 'styled-components';

// Styled components for Performance Section
const PerformanceContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background: #ffffff;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const Header = styled.h2`
  font-size: 20px;
  color: #333;
  margin-bottom: 20px;
  border-bottom: 1px solid #eaeaea;
  padding-bottom: 10px;
`;

const PerformanceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

const Metric = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: #f9f9f9;
  padding: 15px;
  border-radius: 8px;
  border: 1px solid #eaeaea;

  span {
    font-size: 14px;
    color: #666;
  }

  strong {
    font-size: 18px;
    color: #333;
    margin-top: 5px;
  }
`;

const Performance = () => {
  const data = {
    todaysLow: "$46,000.22",
    todaysHigh: "$48,243.33",
    fiftyTwoWLow: "$16,900.22",
    fiftyTwoWHigh: "$49,743.33",
  };

  return (
    <PerformanceContainer>
      <Header>Performance</Header>
      <PerformanceGrid>
        <Metric>
          <span>Today's Low</span>
          <strong>{data.todaysLow}</strong>
        </Metric>
        <Metric>
          <span>Today's High</span>
          <strong>{data.todaysHigh}</strong>
        </Metric>
        <Metric>
          <span>52W Low</span>
          <strong>{data.fiftyTwoWLow}</strong>
        </Metric>
        <Metric>
          <span>52W High</span>
          <strong>{data.fiftyTwoWHigh}</strong>
        </Metric>
      </PerformanceGrid>
    </PerformanceContainer>
  );
};

export default Performance;
