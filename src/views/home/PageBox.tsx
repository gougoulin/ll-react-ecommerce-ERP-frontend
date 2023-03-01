import styled from "styled-components";
import { colors, space } from "../../assets/css/params";

const PageBox = styled.div`
  min-height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 60px 1fr;
  gap: 0 ${space.space};
  background-color: ${colors.gray3};
  font: inherit;
`;

export default PageBox;
