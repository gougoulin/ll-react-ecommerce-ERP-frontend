import { ReactElement, SyntheticEvent, useEffect } from "react";
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
  collapse?: boolean;
}

const MenuItem = (props: MenuItemProps) => {
  const [isFold, setIsFold] = useState(true);
  const { text, subText, leftIcon, to, showRightIcon, showMidText, collapse } =
    props;

  const toggleFold = (ev: SyntheticEvent) => {
    ev.preventDefault();
    ev.stopPropagation();
    setIsFold(!isFold);
  };
  const handleLink = (ev: SyntheticEvent) => {
    ev.stopPropagation();
  };

  const showSubMenu = !collapse && isFold && !!subText;

  const subMenu = showSubMenu
    ? subText.map((it, id) => {
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
      })
    : null;

  const RightIcon = isFold ? (
    <DownOutlinedWithAction onClick={toggleFold} />
  ) : (
    <UpOutlinedWithAction onClick={toggleFold} />
  );

  const iconOnlyItem = (
    <SiderNavItem theme={{ collapse: "auto" }}>
      {to.length === 0 ? (
        <span>{leftIcon}</span>
      ) : (
        <NavLink to={to}>{leftIcon}</NavLink>
      )}
    </SiderNavItem>
  );
  const fullItem = (
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
      <>{subMenu}</>
    </>
  );
  return <>{collapse || showMidText ? iconOnlyItem : fullItem}</>;
};

export default MenuItem;
