import React from 'react'
import styled from 'styled-components'
import { colors, space } from '../assets/css/params';

const CardBtn = styled.button`
  display: inline-block;
  border: 1px solid black;
  border-radius: ${space.borderRadius};
  cursor: pointer;
  padding: ${space.sSpace} ${space.space};
  text-transform: uppercase;
  background-color: ${colors.primary};
  border: 0;
  font-weight: 600;
  color: ${colors.gray1};

  &:hover {
    background-color: ${colors.secondary};
  }
`;

export default CardBtn