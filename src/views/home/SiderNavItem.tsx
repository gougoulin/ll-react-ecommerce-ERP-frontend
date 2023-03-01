import styled from "styled-components";
import { colors, space } from "../../assets/css/params";

const SiderNavItem = styled.div`
  display: grid;
  align-items: flex-start;
  grid-template-columns: ${(props) => props.theme.collapse};
  height: ${space.lSpace};
  cursor: pointer;
  user-select: none;

  & *:first-child {
    grid-column: 1 / span 1;
  }
  & *:nth-child(2) {
    min-width: 120px;
  }

  & a,
  & a:visited,
  & a:active {
    text-decoration: none;
    color: ${colors.gray11};
  }

  & a:hover {
    color: ${colors.primary};
  }
`;

SiderNavItem.defaultProps = {
  theme: { collapse: "32px 1fr 32px" }
};

export default SiderNavItem;
