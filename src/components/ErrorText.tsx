import React from "react";
import styled from "styled-components";
import { colors, space } from "../assets/css/params";

const ErrorTextBox = styled.p`
  color: ${colors.danger};
  font-size: 0.8rem;
  width: 50%;
  margin: auto;
  margin-top: ${space.sSpace}
`;
export default ErrorTextBox;
