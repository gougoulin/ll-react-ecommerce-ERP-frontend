import styled from "styled-components";
import { colors, space } from "../../assets/css/params";

const LoginInput = styled.input`
  border-radius: ${space.borderRadius};
  height: 2rem;
  border: 1px solid ${colors.gray5};
  padding: ${space.sxSpace} ${space.sSpace};
  outline: 0;
  background: transparent;

  &:focus {
    outline: 2px solid ${colors.third};
  }
`;
export default LoginInput;
