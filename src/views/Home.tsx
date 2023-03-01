import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import HeaderBox from "./home/HeaderBox";
import MainBox from "./home/MainBox";
import MenuItem from "./home/MenuItem";
import NavItem from "./home/NavItem";
import PageBox from "./home/PageBox";
import SiderBox from "./home/SiderBox";
import SiderNav from "./home/SiderNav";
import isLogin from "./isLogin";
import navi from "../config/nav";
import * as helper from "../utils/helper";
import { useState } from "react";
import { MenuFoldOutlinedWithAction } from "../components/icons";

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
  const onClick = (ev: React.SyntheticEvent) => {
    setCollapse((state) => !state);
  };
  return (
    <PageBox>
      <HeaderBox>
        <HeaderTitle>UNREAL ERP</HeaderTitle>
        <HeaderNavBox>{headerNavItemList}</HeaderNavBox>
      </HeaderBox>
      <SiderBox theme={collapse ? { minWidth: "0" } : undefined}>
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
