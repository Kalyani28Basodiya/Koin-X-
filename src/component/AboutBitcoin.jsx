import React from 'react'

const AboutBitcoin = () => {
    return (
        <AboutContainer>
            <h3>About Bitcoin</h3>

            <p>
                Bitcoin is a decentralized digital currency that allows peer-to-peer transactions over the internet.
                It operates on a blockchain, which is a distributed ledger that records all transactions across a network
                of computers. Bitcoin was created in 2009 by an anonymous entity known as Satoshi Nakamoto, and it has since
                become a revolutionary asset in the world of finance.
            </p>
            <p>
                Unlike traditional currencies, Bitcoin is not controlled by any central authority, such as a government or
                financial institution. Instead, it relies on cryptographic principles to ensure the security and integrity
                of transactions. Bitcoin can be used for various purposes, including online purchases, investments, and
                as a store of value.
            </p>
        </AboutContainer>
    )
}
import styled from 'styled-components';

const AboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f4f4f9;
  padding: 50px 20px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin: 20px auto;
  max-width: 800px;


h3{
    font-size: 1.5rem;
  color: #333;
  margin-bottom: 20px;
text-align: left;
display: flex;
justify-content: left;
}


p{ 
  font-size: 1.2rem;
  color: #555;
  line-height: 1.6;
  text-align: justify;
  max-width: 750px;
  margin-bottom: 20px;
}
 `;
export default AboutBitcoin;