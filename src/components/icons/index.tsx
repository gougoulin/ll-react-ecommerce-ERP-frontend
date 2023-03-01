import { DownOutlined, MenuFoldOutlined, UpOutlined } from "@ant-design/icons";
import { ReactElement, SyntheticEvent } from "react";
import styled from "styled-components";

import { colors } from "../../assets/css/params";

const IconWrapper = styled.span`
  cursor: pointer;
`;

export const withAction = (Comp: ReactElement) => {
  return <T extends { onClick: React.EventHandler<SyntheticEvent> }>(
    props: T
  ): ReactElement => {
    return <IconWrapper {...props}>{Comp}</IconWrapper>;
  };
};

export const UpOutlinedWithAction = withAction(<UpOutlined />);

export const DownOutlinedWithAction = withAction(<DownOutlined />);

export const MenuFoldOutlinedWithAction = withAction(<MenuFoldOutlined />);

