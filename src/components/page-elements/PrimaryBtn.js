import styled from "styled-components";
import { breakpoints } from '../../theme/breakpoints'
export const PrimaryBtn = styled.a`
  @media ${breakpoints.sm} {
    width: 150px;
    margin: .5rem auto;
  }
  text-decoration: none;
  display: block;

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
    background-color: rgba(255,255,255,.4);
    border: 1px solid black;
    border: 1px solid white;
  }
`;
