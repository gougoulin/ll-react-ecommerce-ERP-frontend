import React from "react";
import styled from "styled-components";
import { space } from "../../assets/css/params";

const RowBox = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: ${space.mSpace}
`;

export default RowBox;
