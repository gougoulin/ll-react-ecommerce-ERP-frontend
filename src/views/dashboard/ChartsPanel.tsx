import { useEffect } from "react";
import { colors, space } from "../../assets/css/params";
import CardBox from "../../components/CardBox";
import List from "../../components/list/List";
import ListItem from "../../components/list/ListItem";
import * as echarts from "echarts";
import styled from "styled-components";
import BoxCenterAll from "../../components/container/BoxCenterAll";

const BarChart = styled.div`
  height: 400px;
  width: 600px;
`;
const LineChart = styled.div`
  height: 400px;
  width: 600px;
`;

const ChartsPanel = () => {
  useEffect(() => {
    let chart = echarts.init(document.getElementById("bar") as HTMLElement);
    let option = {
      xAxis: {
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
      },
      yAxis: {},
      series: [
        {
          type: "bar",
          data: [23, 24, 18, 25, 27, 28, 25]
        }
      ]
    };
    chart.setOption(option);
    return () => {
      if (!chart.isDisposed()) {
        chart.dispose();
      }
    };
  }, []);
  useEffect(() => {
    let chart = echarts.init(document.getElementById("line") as HTMLElement);
    let option = {
      xAxis: {
        data: ["A", "B", "C", "D", "E"]
      },
      yAxis: {},
      series: [
        {
          data: [10, 22, 28, 43, 49],
          type: "line",
          stack: "x"
        },
        {
          data: [5, 4, 3, 5, 10],
          type: "line",
          stack: "x"
        }
      ]
    };
    chart.setOption(option);
    return () => {
      if (!chart.isDisposed()) {
        chart.dispose();
      }
    };
  }, []);

  return (
    <List theme={{ flowDirection: "row", gap: `${space.space}` }}>
      <ListItem theme={{ flex: 1 }}>
        <CardBox theme={{ bg: colors.gray1, gridColumn: "1 / span 8" }}>
          <h3>Retail Trends Chart</h3>
          <BoxCenterAll>
            <LineChart id="line"></LineChart>
          </BoxCenterAll>
        </CardBox>
      </ListItem>
      <ListItem theme={{ flex: 1 }}>
        <CardBox theme={{ bg: colors.gray1, gridColumn: "9 / span 4" }}>
          <h3>User statistics chart</h3>
          <BoxCenterAll>
            <BarChart id="bar"></BarChart>
          </BoxCenterAll>
        </CardBox>
      </ListItem>
    </List>
  );
};

export default ChartsPanel;

// // 基于准备好的dom，初始化echarts实例
// var myChart = ;
// // 绘制图表
// myChart.setOption({
//   title: {
//     text: "ECharts 入门示例"
//   },
//   tooltip: {},
//   xAxis: {
//     data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
//   },
//   yAxis: {},
//   series: [
//     {
//       name: "销量",
//       type: "bar",
//       data: [5, 20, 36, 10, 10, 20]
//     }
//   ]
// });
