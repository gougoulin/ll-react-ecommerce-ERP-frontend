import styled from "styled-components";
import { colors, space } from "../../assets/css/params";

const LoginBox = styled.div`
  height: 40vh;
  min-height: 500px;
  width: 80vw;
  background: ${colors.lighterBG};
  max-width: 700px;
  border-radius: ${space.borderRadius};
`;

export default LoginBox;
