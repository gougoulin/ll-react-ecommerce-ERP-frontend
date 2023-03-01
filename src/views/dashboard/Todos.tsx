import { DatabaseOutlined, ThunderboltOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import React from 'react'
import { colors } from '../../assets/css/params';
import CardBox from '../../components/CardBox';
import CardBtn from '../../components/CardBtn';
import CardBtnBox from './CardBtnBox';

const Todos = () => {
  return (
    <CardBox theme={{ bg: colors.gray1, gridColumn: "1 / span 8" }}>
      <h2>Todos</h2>
      <Card>
        <div>
          <DatabaseOutlined />
        </div>
        <div>
          <h3>There are 30 pending pre-orders</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate
            alias qui iste libero architecto temporibus, nobis hic dolores
            ratione corrupti magni vero, culpa rerum ab consequuntur itaque
            exercitationem doloribus nesciunt.
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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate
            alias qui iste libero architecto temporibus, nobis hic dolores
            ratione corrupti magni vero, culpa rerum ab consequuntur itaque
            exercitationem doloribus nesciunt.
          </p>
        </div>
        <CardBtnBox>
          <CardBtn>Handle</CardBtn>
        </CardBtnBox>
      </Card>
    </CardBox>
  );
}

export default Todos