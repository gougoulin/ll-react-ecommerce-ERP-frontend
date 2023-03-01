import styled from "styled-components";
import { colors, space } from "../../assets/css/params";

type Props = {
  borderColor?: string;
  backgroundColor?: string;
  textColor?: string;
  fontSize?: string;
  width?: string;
  height?: string;
  borderRadius?: string;
  hoverBgColor?: string;
  hoverTextColor?: string;
  padding?: string;
};

const ButtonBase = styled.button`
  text-transform: uppercase;
  padding: ${(props: Props) => props.padding};
  border: 1px solid ${(props: Props) => props.borderColor};
  background-color: ${(props: Props) => props.backgroundColor};
  outline: none;
  color: ${(props: Props) => props.textColor};
  font-weight: 500;
  cursor: pointer;
  font-size: ${(props: Props) => props.fontSize};
  width: ${(props: Props) => props.width};
  height: ${(props: Props) => props.height};
  border-radius: ${(props: Props) => props.borderRadius};

  &:hover {
    background-color: ${(props: Props) => props.hoverBgColor};
    color: ${(props: Props) => props.hoverTextColor};
  }
`;

ButtonBase.defaultProps = {
  contentEditable: false,
  borderColor: "transparent",
  backgroundColor: `${colors.primary.base}`,
  textColor: `${colors.gray1}`,
  fontSize: "1rem",
  width: "auto",
  height: "auto",
  hoverBgColor: `${colors.primary.lighter}`,
  hoverTextColor: `${colors.gray1}`,
  borderRadius: `${space.space}`,
  padding: `${space.sSpace} ${space.space}`
};

export default ButtonBase;
