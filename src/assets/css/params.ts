const gray1 = "#ffffff";
const gray2 = "#fafafa";
const gray3 = "#f5f5f5";
const gray4 = "#f5f5f5";
const gray5 = "#d9d9d9";
const gray7 = "#8c8c8c";
const gray9 = "#434343";
const gray11 = "#1f1f1f";
const gray12 = "#141414";
const gray13 = "#000000";

const colors = {
  // primary: "#52c41a", // green-6
  primary: {
    base: "#1d39c4",
    darker: "#10239e",
    lighter: "#2f54eb",
    xlighter: "#597ef7"
  },
  secondary: {
    lighter: "#722ed1", // purple-6
    base: "#531dab",
    darker: "#391085"
  },
  third: "#d9f7be",
  success: {
    base: "#95de64",
    lighter: "#b7eb8f",
    darker: "#73d13d"
  },
  warn: {
    base: "#ffec3d",
    darker: "#fadb14",
    lighter: "#fff566"
  },
  danger: {
    base: "#f5222d" // red-6
  },
  gray1,
  gray2,
  gray3,
  gray4,
  gray5,
  gray7,
  gray9,
  gray11,
  gray12,
  gray13,
  lightBG: gray2,
  lighterBG: gray1,
  darkBG: "#22075e", // purple-9
  primaryBG: "#237804",
  secondaryBG: "#135200",
  HeaderBG: "#092b00"
};

const space = {
  borderRadius: "0.5em",
  sxSpace: "0.4rem",
  sSpace: "0.8rem",
  space: "1.6rem",
  mSpace: "2.4rem",
  lSpace: "4.8rem",
  xlSpace: "7.2rem"
};

export { colors, space };
