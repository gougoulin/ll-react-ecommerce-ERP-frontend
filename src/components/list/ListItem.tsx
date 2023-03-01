import React from "react";
import styled from "styled-components";

const ListItem = styled.li`
  flex: ${(props) => props.theme.flex};
  height: 100%;
  align-self: ${(props) => props.theme.alignSelf};
`;

ListItem.defaultProps = {
  theme: {
    flex: 1,
    alignSelf: "flex-start"
  }
};

export default ListItem;
