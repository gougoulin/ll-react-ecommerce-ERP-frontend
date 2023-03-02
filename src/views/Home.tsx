import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import { MenuFoldOutlinedWithAction } from "../components/icons";
import navi from "../config/nav";
import * as helper from "../utils/helper";
import HeaderBox from "./home/HeaderBox";
import MainBox from "./home/MainBox";
import MenuItem from "./home/MenuItem";
import NavItem from "./home/NavItem";
import PageBox from "./home/PageBox";
import SiderBox from "./home/SiderBox";
import SiderNav from "./home/SiderNav";
import isLogin from "./isLogin";

const HeaderNavBox = styled.nav`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`;
const HeaderTitle = styled.h2`
  margin: 0;
`;

const headerNavItemList = navi.headerNav.map((it, id) => {
  return (
    <NavItem key={helper.keyId(id)}>
      <Link to={it.to}>{it.text}</Link>
    </NavItem>
  );
});

const Home = () => {
  const [collapse, setCollapse] = useState(false);
  const siderNavItemList = navi.siderNav.map((it, id) => {
    return (
      <MenuItem
        key={id + it.text}
        text={it.text}
        to={it.to}
        subText={it.subText}
        leftIcon={it.leftIcon}
        showRightIcon={it.showRightIcon}
        showMidText={collapse}
      />
    );
  });
  const onClick = () => {
    setCollapse((state) => !state);
  };
  return (
    <PageBox siderWidth={collapse ? "2em" : "20em"}>
      <HeaderBox>
        <HeaderTitle>UNREAL ERP</HeaderTitle>
        <HeaderNavBox>{headerNavItemList}</HeaderNavBox>
      </HeaderBox>
      <SiderBox atLeastWidth={collapse ? "300px" : undefined}>
        <SiderNav>{siderNavItemList}</SiderNav>
        <MenuItem
          to=""
          leftIcon={<MenuFoldOutlinedWithAction onClick={onClick} />}
          showMidText={collapse}
        />
      </SiderBox>
      <MainBox>
        {/* <ContentRoutes /> */}
        <Outlet />
      </MainBox>
    </PageBox>
  );
};
export default isLogin(Home);
