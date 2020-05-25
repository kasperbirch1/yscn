import styled from "styled-components";
export const PrimaryBtn = styled.a`
  text-decoration: none;
  display: block; 
  margin: .5rem auto;
  padding: .5rem 1rem; 
  border: 1px solid white;
  border-radius: 5px;
  background-color: transparent;
  color: white;
  text-transform: uppercase;
  font-weight: 600;
  text-align: center;
  transition: all 0.2s;
  :hover {
    color: #000000;
    background-color: rgba(255,255,255,1);
    border: 1px solid black;
  }
`;
