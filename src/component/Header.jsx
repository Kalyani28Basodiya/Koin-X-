import React from 'react'
import styled from "styled-components";
const Header = () => {
  return (
    <HeaderContainer>
    <Logo>KoinX</Logo>
    <Nav>
      <ul>
        <li>Crypto Taxes</li>
        <li>Free Tools</li>
        <li>Resource Center</li>
        <li className="get-started">Get Started</li>
      </ul>
    </Nav>
  </HeaderContainer>
  )
}
export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-family: "Arial", sans-serif;
`;

export const Logo = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  color: #1a202c;
`;

export const Nav = styled.nav`
  ul {
    display: flex;
    list-style: none;
    gap: 1.5rem;

    li {
      font-size: 1rem;
      color: #4a5568;
      cursor: pointer;
      transition: color 0.3s ease;

      &:hover {
        color: #1a202c;
      }
    }

    .get-started {
      background-color: #2563eb;
      color: #ffffff;
      padding: 0.5rem 1rem;
      border-radius: 5px;
      font-weight: bold;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #1e40af;
      }
    }
  }
`;
export default Header;