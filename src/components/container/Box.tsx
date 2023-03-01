import React from "react";
import styled from "styled-components";

const Box = styled.div`
  height: ${(props) => props.theme.height};
  width: ${(props) => props.theme.width};
  padding: ${(props) => props.theme.padding};
`;

Box.defaultProps = {
  theme: {
    height: "100%",
    width: "100%",
    padding: "0"
  }
};

export default Box;
