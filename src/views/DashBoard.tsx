import styled from "styled-components";
import { colors, space } from "../assets/css/params";
import ChartsPanel from "./dashboard/ChartsPanel";
import PageBox from "./dashboard/PageBox";
import SummaryPannel from "./dashboard/SummaryPannel";
import TodoAndSalesPanel from "./dashboard/TodoAndSalesPanel";


const Card = styled.div`
  display: grid;
  grid-template-columns: minmax(20px, 10%) 1fr minmax(30px, 20%);
  margin-bottom: ${space.sSpace};
  border: 1px solid ${colors.gray3};
  padding: ${space.sSpace};

  & h3 {
    color: ${colors.primary};
  }

  & div:first-child {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const CardBtnBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;



const DashBoard = () => {
  return (
    <PageBox>
      <SummaryPannel />
      <TodoAndSalesPanel />
      <ChartsPanel />
    </PageBox>
  );
};

export default DashBoard;
