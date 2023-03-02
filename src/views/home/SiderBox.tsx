import styled from "styled-components";
import { colors, space } from "../../assets/css/params";

type SiderBoxProps = {
  atLeastWidth?: string;
}

const SiderBox = styled.aside`
  grid-column: 1 / 1;
  grid-row: 2 / span 1;
  /* min-width: ${(props: SiderBoxProps) => props.atLeastWidth}; */
  background-color: ${colors.gray1};
  padding: ${space.mSpace} ${space.sSpace};
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
`;

export default SiderBox;
