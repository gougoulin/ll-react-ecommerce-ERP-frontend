import styled from "styled-components";
import { colors, space } from "../../assets/css/params";
import ButtonBase from "./ButtonBase";

type PropsType = {
  left: any;
  text: string;
  onClick?: () => void;
};

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;

  & :first-child {
    margin-right: ${space.sSpace};
  }
`;

const ButtonWithIcon = (props: PropsType) => {
  const { left, text, onClick } = props;
  return (
    <ButtonBase
      onClick={onClick}
      textColor={colors.gray11}
      backgroundColor="transparent"
      borderColor="transparent"
      hoverBgColor={colors.primary.lighter}
      hoverTextColor={colors.gray1}
    >
      <Wrapper>
        {left}
        <span>{text}</span>
      </Wrapper>
    </ButtonBase>
  );
};

export default ButtonWithIcon;
