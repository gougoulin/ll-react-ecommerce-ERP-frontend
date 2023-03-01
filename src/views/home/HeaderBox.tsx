import styled from "styled-components";
import { colors, space } from "../../assets/css/params";

const HeaderBox = styled.header`
  grid-column: 1 / span 2;
  grid-row: 1 / span 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${space.sSpace};
  background-color: ${colors.darkBG};
  color: ${colors.gray1}
`;

export default HeaderBox;
