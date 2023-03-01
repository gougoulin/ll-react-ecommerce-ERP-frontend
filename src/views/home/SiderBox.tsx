import styled from "styled-components";
import { colors, space } from "../../assets/css/params";

const SiderBox = styled.div`
  grid-column: 1 / 1;
  grid-row: 2 / span 1;
  min-width: ${props => props.theme.minWidth};
  background-color: ${colors.gray1};
  padding: ${space.mSpace} ${space.sSpace};
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
`;
SiderBox.defaultProps = {
  theme: {
    minWidth: "160px"
  }
};
export default SiderBox;
