import styled from "styled-components";
import { colors, space } from "../../assets/css/params";
import CardBox from "../../components/CardBox";
import List from "../../components/list/List";
import ListItem from "../../components/list/ListItem";
import { AiOutlineEye, AiOutlineDollarCircle } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";

const KeyPointBox = styled.div`
  position: absolute;
  left: ${space.mSpace};
  bottom: ${space.mSpace};

  & h3:first-child {
    font-size: 1.2rem;
    margin-bottom: ${space.space};
  }

  & h3:last-child {
    font-size: 2rem;
  }
`;

const IconBox = styled.div`
  float: right;
  right: 10px;
  bottom: 10px;
`;

const SummaryPannel = () => {
  return (
    <List theme={{ flowDirection: "row", gap: `${space.space}` }}>
      <ListItem theme={{ flex: 1 }}>
        <CardBox
          theme={{
            bg: colors.gray1,
            gridColumn: "1 / span 4",
            height: "200px"
          }}
        >
          <KeyPointBox>
            <h3>Views</h3>
            <h3>239,234</h3>
          </KeyPointBox>
          <IconBox>
            <AiOutlineEye size={120} color={colors.gray3} />
          </IconBox>
        </CardBox>
      </ListItem>
      <ListItem>
        <CardBox
          theme={{
            bg: colors.gray1,
            gridColumn: "1 / span 4",
            height: "200px"
          }}
        >
          <KeyPointBox>
            <h3>Orders</h3>
            <h3>19,204</h3>
          </KeyPointBox>
          <IconBox>
            <BiShoppingBag size={120} color={colors.gray3} />
          </IconBox>
        </CardBox>
      </ListItem>
      <ListItem>
        <CardBox
          theme={{
            bg: colors.gray1,
            gridColumn: "9 / span 4",
            height: "200px"
          }}
        >
          <KeyPointBox>
            <h3>Balance</h3>
            <h3>$2,239,234.00</h3>
          </KeyPointBox>
          <IconBox>
            <AiOutlineDollarCircle size={120} color={colors.gray3} />
          </IconBox>
        </CardBox>
      </ListItem>
    </List>
  );
};

export default SummaryPannel;
