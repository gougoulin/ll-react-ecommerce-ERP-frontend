import styled from "styled-components";
import { space } from "../../assets/css/params";

const LoginForm = styled.form`
  width: 80%;
  max-width: 400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 20% 80%;
  grid-template-rows: repeat(3, auto);
  gap: ${space.mSpace} ${space.sSpace};
  justify-content: center;
  align-items: center;
`;
export default LoginForm;
