import styled from "styled-components";
import { colors, space } from "../../assets/css/params";

const LoginSumitBtn = styled.button`
  grid-column: 1 / 3;
  display: inline-block;
  width: 100%;
  margin: 0 auto;
  margin-top: ${space.space};
  border: 1px solid black;
  border-radius: ${space.borderRadius};
  cursor: pointer;
  padding: 10px 0;
  text-transform: uppercase;
  background-color: ${colors.primary.base};
  border: 0;
  font-weight: 600;
  color: ${colors.gray1};
  font: inherit;

  &:hover {
    background-color: ${colors.primary.lighter}
  }
`;

export default LoginSumitBtn;
