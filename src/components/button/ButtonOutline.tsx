import React from "react";
import styled, { IntrinsicElementsKeys } from "styled-components";
import ButtonBase from "./ButtonBase";
import { colors } from "../../assets/css/params";

// const ButtonOutline = <T extends ButtonOutlineProps & React.PropsWithChildren>(
//   props: T
// ) => {
//   const { color, children, fontSize } = props;
//   const theme = {
//     borderColor: color || `${colors.primary.base}`,
//     textColor: color || `${colors.primary.base}`,
//     fontSize: fontSize || "16",
//     backgroundColor: "transparent",
//     onHoverBgColor: color || `${colors.primary.base}`,
//     onHoverTextColor: `${colors.gray1}`
//   };

//   return <ButtonBase theme={theme}>{children}</ButtonBase>;
// };

interface ButtonOutlineProps {
  borderColor?: string;
}

const ButtonOutline = styled(ButtonBase)``;

ButtonOutline.defaultProps = {
  hoverBgColor: `${colors.primary.base}`,
  borderColor: `${colors.primary.base}`,
  fontSize: "16",
  backgroundColor: "transparent",
  hoverTextColor: `${colors.gray1}`,
  textColor: `${colors.primary.base}`
};

export default ButtonOutline;
