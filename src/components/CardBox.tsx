import React from "react";
import styled from "styled-components";
import { space } from "../assets/css/params";

const CardBox = styled.div`
  background-color: ${(props) => props.theme.bg};
  border-radius: ${space.sxSpace};
  height: ${(props) => props.theme.height};
  overflow: auto;
  flex-grow: 1;
  grid-column: ${(props) => props.theme.gridColumn};
  grid-row: ${(props) => props.theme.gridRow};
  position: relative;
  padding: ${space.space};

  & h2 {
    font-size: 1.5rem;
    margin-bottom: ${space.space};
  }
`;

CardBox.defaultProps = {
  theme: {
    height: "200px"
  }
};

export default CardBox;
