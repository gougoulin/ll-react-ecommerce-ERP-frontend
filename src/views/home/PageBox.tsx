import styled from "styled-components";
import { colors, space } from "../../assets/css/params";

type PageBoxProps = {
  siderWidth?: string;
}

const PageBox = styled.div`
  min-height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: ${({siderWidth}: PageBoxProps) => siderWidth || "20em"} 1fr;
  grid-template-rows: 4em 1fr;
  gap: 0 ${space.space};
  background-color: ${colors.gray3};
  font: inherit;
`;

export default PageBox;
