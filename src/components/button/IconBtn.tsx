import React from "react";
import styled from "styled-components";
import { colors, space } from "../../assets/css/params";
import ButtonBase from "./ButtonBase";

const Wrapper = styled.span`
  width: 40px;
  height: 40px;

  & .iconbtn__buttonbase {
    width: 40px;
    height: 40px;
    padding: 0 !important;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: 1px solid transparent;
  }

  & button:hover {
    background-color: ${colors.primary.lighter} !important;
    border-radius: 50%;
    color: ${colors.gray1};
  }
`;

const IconBtn = ({
  children,
  onClick
}: {
  children: any;
  onClick?: () => void;
}) => {
  return (
    <Wrapper>
      <ButtonBase
        textColor={colors.gray11}
        className="iconbtn__buttonbase"
        onClick={onClick}
        borderRadius="50%"
        width="40px"
        height="40px"
      >
        {children}
      </ButtonBase>
    </Wrapper>
  );
};

export default IconBtn;
