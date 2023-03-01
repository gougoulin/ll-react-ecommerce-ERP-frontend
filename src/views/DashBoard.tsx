import ChartsPanel from "./dashboard/ChartsPanel";
import PageBox from "./dashboard/PageBox";
import SummaryPannel from "./dashboard/SummaryPannel";
import TodoAndSalesPanel from "./dashboard/TodoAndSalesPanel";

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
