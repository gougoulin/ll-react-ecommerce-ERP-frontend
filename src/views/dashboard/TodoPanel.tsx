import { DatabaseOutlined } from "@ant-design/icons";
import { colors, space } from "../../assets/css/params";
import ButtonBase from "../../components/button/ButtonBase";
import CardBox from "../../components/CardBox";
import Box from "../../components/container/Box";
import BoxCenterAll from "../../components/container/BoxCenterAll";
import List from "../../components/list/List";
import ListItem from "../../components/list/ListItem";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaExchangeAlt } from "react-icons/fa";
import styled from "styled-components";
import ButtonOutline from "../../components/button/ButtonOutline";

const ItemTitle = styled.h3`
  margin-bottom: ${space.sSpace};
`

const TodoPanel = () => {
  return (
    <CardBox
      theme={{
        bg: colors.gray1,
        gridColumn: "1 / span 8",
        height: "200px"
      }}
    >
      <h2>Todos</h2>
      <Box theme={{ padding: `${space.sSpace}` }}>
        <List theme={{ flowDirection: "row", gap: `${space.space}` }}>
          <ListItem theme={{ flex: 1, alignSelf: "center" }}>
            <AiOutlineShoppingCart size={32} color={colors.primary.darker} />
          </ListItem>
          <ListItem theme={{ flex: 10 }}>
            <ItemTitle>There are 30 pending pre-orders</ItemTitle>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptate alias qui iste libero architecto temporibus, nobis hic
              dolores ratione corrupti magni vero, culpa rerum ab consequuntur
              itaque exercitationem doloribus nesciunt.
            </p>
          </ListItem>
          <ListItem theme={{ flex: 1, alignSelf: "center" }}>
            <BoxCenterAll>
              <ButtonBase>process</ButtonBase>
            </BoxCenterAll>
          </ListItem>
        </List>
        <List theme={{ flowDirection: "row", gap: `${space.space}` }}>
          <ListItem theme={{ flex: 1, alignSelf: "center" }}>
            <FaExchangeAlt size={32} color={colors.primary.darker} />
          </ListItem>
          <ListItem theme={{ flex: 10 }}>
            <ItemTitle>Total 25 exchange orders</ItemTitle>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptate alias qui iste libero architecto temporibus, nobis hic
              dolores ratione corrupti magni vero, culpa rerum ab consequuntur
              itaque exercitationem doloribus nesciunt.
            </p>
          </ListItem>
          <ListItem theme={{ flex: 1, alignSelf: "center" }}>
            <ButtonOutline>process</ButtonOutline>
          </ListItem>
        </List>
      </Box>
      {/* <Card>
              <div>
                <DatabaseOutlined />
              </div>
              <div>
                <h3>There are 30 pending pre-orders</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptate alias qui iste libero architecto temporibus, nobis
                  hic dolores ratione corrupti magni vero, culpa rerum ab
                  consequuntur itaque exercitationem doloribus nesciunt.
                </p>
              </div>
              <CardBtnBox>
                <CardBtn>Handle</CardBtn>
              </CardBtnBox>
            </Card>
            <Card>
              <div>
                <ThunderboltOutlined />
              </div>
              <div>
                <h3>There are 30 pending pre-orders</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptate alias qui iste libero architecto temporibus, nobis
                  hic dolores ratione corrupti magni vero, culpa rerum ab
                  consequuntur itaque exercitationem doloribus nesciunt.
                </p>
              </div>
              <CardBtnBox>
                <CardBtn>Handle</CardBtn>
              </CardBtnBox>
            </Card> */}
    </CardBox>
  );
};

export default TodoPanel;
