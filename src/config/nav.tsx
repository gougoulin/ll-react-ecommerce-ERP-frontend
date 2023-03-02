import {
  DollarOutlined,
  MoneyCollectOutlined,
  PieChartOutlined,
  ProfileOutlined,
  SendOutlined,
  SettingOutlined
} from "@ant-design/icons";

const headerNav = [
  {
    text: "task",
    to: ""
  },
  {
    text: "message",
    to: ""
  },
  {
    text: "Tony Smith",
    to: ""
  }
];

const siderNav = [
  {
    text: "Dashboard",
    to: "/dashboard",
    subText: undefined,
    leftIcon: <SendOutlined />,
    showRightIcon: undefined
  },
  {
    text: "Products",
    to: "/products/",
    subText: [
      { text: "All Products", to: "/products/" },
      { text: "Create Product", to: "/products/new" },
      { text: "Category", to: "/products/category" },
    ],
    leftIcon: <ProfileOutlined />,
    showRightIcon: true
  },
  {
    text: "Orders",
    to: "/orders",
    subText: [{ text: "test 1", to: "" }],
    leftIcon: <DollarOutlined />,
    showRightIcon: true
  },
  {
    text: "Finance",
    to: "/products/list",
    subText: undefined,
    leftIcon: <PieChartOutlined />,
    showRightIcon: undefined
  },
  {
    text: "Analysis",
    to: "/products",
    subText: undefined,
    leftIcon: <MoneyCollectOutlined />,
    showRightIcon: undefined
  },
  {
    text: "Settings",
    to: "/settings",
    subText: undefined,
    leftIcon: <SettingOutlined />,
    showRightIcon: undefined
  }
];

const productNav = [
  {
    text: "Dashboard",
    to: "/dashboard",
    subText: undefined,
    leftIcon: <SendOutlined />,
    showRightIcon: undefined
  },
  {
    text: "Products",
    to: "/products",
    subText: [
      { text: "test 1", to: "" },
      { text: "test 2", to: "" }
    ],
    leftIcon: <ProfileOutlined />,
    showRightIcon: true
  },
  {
    text: "Orders",
    to: "/orders",
    subText: [{ text: "test 1", to: "" }],
    leftIcon: <DollarOutlined />,
    showRightIcon: true
  },
  {
    text: "Finance",
    to: "/products",
    subText: undefined,
    leftIcon: <PieChartOutlined />,
    showRightIcon: undefined
  },
  {
    text: "Analysis",
    to: "/analysis",
    subText: undefined,
    leftIcon: <MoneyCollectOutlined />,
    showRightIcon: undefined
  },
  {
    text: "Settings",
    to: "/settings",
    subText: undefined,
    leftIcon: <SettingOutlined />,
    showRightIcon: undefined
  }
];

const navi = {
  headerNav,
  siderNav
};

export default navi;
