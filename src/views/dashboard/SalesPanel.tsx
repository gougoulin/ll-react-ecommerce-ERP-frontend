import React from "react";
import styled from "styled-components";
import { colors, space } from "../../assets/css/params";
import CardBox from "../../components/CardBox";
import List from "../../components/list/List";
import ListItem from "../../components/list/ListItem";

const SalesTable = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: ${space.sSpace};

  & *:nth-child(3n + 1) {
    grid-column: 1 / span 2;
  }
  & *:nth-child(3n + 2) {
    grid-column: 3 / span 8;
  }
  & *:nth-child(3n) {
    grid-column: 11 / span 2;
  }
`;

const TableRow = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: ${space.sxSpace};
  margin-bottom: ${space.sSpace};
  & *:nth-child(3n + 1) {
    grid-column: 1 / span 2;
  }
  & *:nth-child(3n + 2) {
    grid-column: 3 / span 8;
  }
  & *:nth-child(3n) {
    grid-column: 11 / span 1;
  }
`;

const TableTitleRow = styled.div`
  border-bottom: 1px solid ${colors.gray5};
  padding-bottom: ${space.sSpace};
  margin-bottom: ${space.sSpace};
  width: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: ${space.sSpace};
  & *:nth-child(3n + 1) {
    grid-column: 7 / span 3;
  }
  & *:nth-child(3n + 2) {
    grid-column: 11 / span 1;
  }

`;

const SalesPanel = () => {
  return (
    <CardBox
      theme={{
        bg: colors.gray1,
        gridColumn: "9 / span 4",
        height: "200px"
      }}
    >
      <h2>Sales</h2>
      <TableTitleRow>
        <p>Total Quantity: </p>
        <p>5,630</p>
      </TableTitleRow>
      <TableRow>
        <div>
          <img src="a.jpg" alt="" />
        </div>
        <div>
          <p>Product Name: Lorem ipsum dolor sit amet.</p>
          <p>Attributes: Lorem ipsum dolor sit amet.</p>
        </div>
        <p>500</p>
      </TableRow>
      <TableRow>
        <div>
          <img src="a.jpg" alt="" />
        </div>
        <div>
          <p>Product Name: Lorem ipsum dolor sit amet.</p>
          <p>Attributes: Lorem ipsum dolor sit amet.</p>
        </div>
        <p>500</p>
      </TableRow>
      <TableRow>
        <div>
          <img src="a.jpg" alt="" />
        </div>
        <div>
          <p>Product Name: Lorem ipsum dolor sit amet.</p>
          <p>Attributes: Lorem ipsum dolor sit amet.</p>
        </div>
        <p>500</p>
      </TableRow>
      <SalesTable></SalesTable>
    </CardBox>
  );
};

export default SalesPanel;
