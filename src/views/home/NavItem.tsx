import styled from "styled-components";
import { colors, space } from "../../assets/css/params";

const NavItem = styled.div`
  margin-left: ${space.lSpace};
  & a,
  & a:active,
  & a:visited {
    text-decoration: none;
    color: ${colors.gray1};
  }
`;

export default NavItem;
