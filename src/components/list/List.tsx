import React from "react";
import styled from "styled-components";
import { space } from "../../assets/css/params";

const List = styled.ul`
  display: flex;
  flex-direction: ${(props) => props.theme.flexDirection};
  justify-content: ${(props) => props.theme.justifyContent};
  align-items: ${(props) => props.theme.alignItems};
  & > * {
    margin-right: ${(props) => props.theme.gap};
    margin-bottom: ${(props) => props.theme.gap};
  }

  & > *:last-child {
    margin-right: 0;
    margin-bottom: 0;
  }
`;

List.defaultProps = {
  theme: {
    flexDirection: "column",
    gap: `${space.space}`,
    justifyContent: "start",
    alignItems: "center"
  }
};

export default List;
