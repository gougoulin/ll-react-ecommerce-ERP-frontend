import styled from "styled-components";
import { colors, space } from "../../assets/css/params";
import { AiFillDelete, AiFillEdit, AiFillHeart } from "react-icons/ai";

interface ProductCardTypes {
  width?: string;
  height?: string;
}
const StyledProductCard = styled.div`
  display: grid;
  background: ${colors.gray1};
  width: ${({ width }: ProductCardTypes) => width || "360px"};
  height: ${({ height }: ProductCardTypes) => height || "480px"};
  grid-template-columns: repeat(8, 1fr);
  align-items: start;
  overflow: hidden;
  border-radius: ${space.sxSpace};
`;

export const ProductImage = styled.img`
  grid-column: 1 / 9;
  width: 100%;
`;

const CardTitle = styled.h4`
  grid-column: 1 / 9;
  padding: 0 ${space.space};
  font-size: 1.4rem;
`;
const CardText = styled.p`
  grid-column: 1 / 9;
  padding: 0 ${space.space};
`;
const CardEditBtn = styled(AiFillEdit)`
  grid-column: 7/8;
  place-self: center;
  justify-self: start;
  cursor: pointer;
  fill: ${colors.gray11};
  :hover {
    fill: ${colors.primary.lighter};
  }
`;
const CardDeleteBtn = styled(AiFillDelete)`
  grid-column: 8/9;
  place-self: center;
  justify-self: start;
  cursor: pointer;
  fill: ${colors.gray11};
  :hover {
    fill: ${colors.primary.lighter};
  }
`;
const CardLoveBtn = styled(AiFillHeart)`
  grid-column: 6/7;
  place-self: center;
  justify-self: start;
  cursor: pointer;
  fill: ${colors.gray11};
  :hover {
    fill: ${colors.primary.lighter};
  }
`;

interface ProductCardPropsType {
  title?: string;
  textContentBold?: string | undefined;
  textContext?: string | undefined;
  imgSrc?: string | undefined;
}
const ProductCard = ({
  title,
  imgSrc,
  textContentBold,
  textContext
}: ProductCardPropsType) => {
  return (
    <StyledProductCard>
      <ProductImage src={imgSrc} alt="product image" />
      <CardTitle>{title}</CardTitle>
      <CardText>
        <b>{textContentBold}</b>
        <br />
        <br />
        {textContext}
      </CardText>
      <CardLoveBtn size={24} color={colors.gray11} />
      <CardEditBtn size={24} color={colors.gray11} />
      <CardDeleteBtn size={24} color={colors.gray11} />
    </StyledProductCard>
  );
};

export default ProductCard;
