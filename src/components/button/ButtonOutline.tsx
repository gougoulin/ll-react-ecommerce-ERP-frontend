import styled from "styled-components";
import ButtonBase from "./ButtonBase";
import { colors } from "../../assets/css/params";

const ButtonOutline = styled(ButtonBase)`
  border: 1px solid ${({ borderColor }) => borderColor || colors.primary.base};
  font-size: ${({ fontSize }) => fontSize || "1.6rem"};
  color: ${({ textColor }) => textColor || colors.primary.base};
  background-color: ${({ backgroundColor }) =>
    backgroundColor || "transparent"};

  & :hover {
    background-color: ${({ hoverBgColor }) =>
      hoverBgColor || colors.primary.base};
    color: ${({ hoverTextColor }) => hoverTextColor || colors.gray1};
  }
`;

export default ButtonOutline;
