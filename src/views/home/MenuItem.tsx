import { ReactElement, SyntheticEvent, memo } from "react";
import { NavLink } from "react-router-dom";
import SiderNavItem from "./SiderNavItem";
import { useState } from "react";
import {
  DownOutlinedWithAction,
  UpOutlinedWithAction
} from "../../components/icons";
import styled from "styled-components";
import { colors } from "../../assets/css/params";

const ActiveSpan = styled.span`
  color: ${colors.primary.base};
`;

interface SubNavItem {
  text?: string;
  to?: string;
}

interface MenuItemProps {
  text?: string;
  subText?: SubNavItem[];
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
  active?: boolean;
  to: string;
  showRightIcon?: boolean | undefined;
  showMidText?: boolean | undefined;
}

const MenuItem = (props: MenuItemProps) => {
  const [isFold, setIsFold] = useState(true);
  const { text, subText, leftIcon, to, showRightIcon, showMidText } =
    props;
  const onClick = (ev: SyntheticEvent) => {
    ev.preventDefault();
    ev.stopPropagation();
    setIsFold(!isFold);
  };
  const handleLink = (ev: SyntheticEvent) => {
    ev.stopPropagation();
  };
  const subMenu =
    subText &&
    subText.map((it, id) => {
      return (
        <SiderNavItem key={id + (it.text ? it.text : "")}>
          <span></span>
          <NavLink onClick={handleLink} to={it.to ? it.to : ""}>
            {({ isActive }) => {
              return isActive ? (
                <ActiveSpan>{it.text}</ActiveSpan>
              ) : (
                <span>{it.text}</span>
              );
            }}
          </NavLink>
        </SiderNavItem>
      );
    });

  const RightIcon = isFold ? (
    <DownOutlinedWithAction onClick={onClick} />
  ) : (
    <UpOutlinedWithAction onClick={onClick} />
  );

  return (
    <>
      {showMidText ? (
        <SiderNavItem theme={{ collapse: "auto" }}>
          {to.length === 0 ? (
            <span>{leftIcon}</span>
          ) : (
            <NavLink to={to}>{leftIcon}</NavLink>
          )}
        </SiderNavItem>
      ) : (
        <>
          <SiderNavItem>
            <>
              {leftIcon}
              {Array.isArray(subText) ? (
                <span>{text}</span>
              ) : (
                <NavLink onClick={handleLink} to={to}>
                  {({ isActive }) => {
                    return isActive ? (
                      <ActiveSpan>{text}</ActiveSpan>
                    ) : (
                      <span>{text}</span>
                    );
                  }}
                </NavLink>
              )}
              {showRightIcon ? RightIcon : null}
            </>
          </SiderNavItem>
          <>{isFold ? null : subMenu}</>
        </>
      )}
    </>
  );
};

export default memo(MenuItem);
