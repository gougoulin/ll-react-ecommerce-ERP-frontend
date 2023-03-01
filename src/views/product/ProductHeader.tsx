import {
  AiFillFilter,
  AiOutlineFileAdd,
  AiOutlineSearch
} from "react-icons/ai";
import styled from "styled-components";
import { colors, space } from "../../assets/css/params";
import { BsList } from "react-icons/bs";
import ButtonWithIcon from "../../components/button/ButtonWithIcon";
import { BiCategoryAlt } from "react-icons/bi";
import IconBtn from "../../components/button/IconBtn";
import { createRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const HeaderBox = styled.div`
  display: grid;
  gap: ${space.sSpace};
  align-items: center;
  background-color: ${colors.gray1};
  height: 80px;
  border-radius: ${space.sxSpace};
  grid-template-columns: repeat(24, 1fr);
`;

const HeaderTitleBox = styled.div`
  grid-column: 1 / span 2;
  text-align: center;
`;
const HeaderControlBox = styled.div`
  grid-column: 4 / 11;
  justify-content: "center";

  & button:last-child {
    margin-left: ${space.sSpace};
  }
`;

const SearchInput = styled.input`
  width: ${(props) => props.theme.width};
  height: 30px;
  /* border: 1px solid ${colors.gray5}; */
  border: ${(props) => props.theme.border};
  border-radius: 2px;

  &:focus {
    border: 1px solid ${colors.gray5};
  }
`;

const SearchInputLabel = styled.label`
  grid-column: 12 / 18;
  margin-right: ${space.sxSpace};
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const HeaderTitle = styled.h2``;

const ToggleViewBox = styled.div`
  grid-column: 22 / 25;
  display: flex;
  align-items: center;

  & *:first-child {
    margin-right: ${space.sSpace};
  }
`;
const FileterIconBox = styled.div`
  grid-column: 19 / 20;
`;

const SearchIconBox = styled.div`
  grid-column: 18 / 19;
`;

const ProductHeader = () => {
  const [hideInput, setHideInput] = useState(true);
  const navigate = useNavigate();

  const inputWidth = hideInput ? "0" : "100%";
  const border = hideInput ? "none" : `1px solid ${colors.gray5}`;
  let searchInputRef = createRef();
  const onBlur = () => {
    setHideInput(true);
  };
  const onClickSearch = () => {
    setHideInput(false);
    let elem = searchInputRef.current as any as HTMLInputElement;
    elem.focus();
  };
  const handleCreate = () => {
    navigate("/products/new");
  }

  return (
    <>
      <HeaderBox>
        <HeaderTitleBox>
          <HeaderTitle>Products</HeaderTitle>
        </HeaderTitleBox>
        <HeaderControlBox>
          <ButtonWithIcon
            onClick={handleCreate}
            left={<AiOutlineFileAdd size={32} />}
            text="Add New"
          />
          <ButtonWithIcon left={<BiCategoryAlt size={32} />} text="Category" />
        </HeaderControlBox>
        <SearchInputLabel htmlFor="products__header--search">
          <SearchInput
            ref={(x) => {
              if (x !== null) {
                searchInputRef = { ...searchInputRef, ...{ current: x } };
              }
            }}
            name="products__header--search"
            theme={{ width: inputWidth, border: border }}
            onBlur={onBlur}
          />
        </SearchInputLabel>
        <SearchIconBox>
          <IconBtn onClick={onClickSearch}>
            <AiOutlineSearch size={32} />
          </IconBtn>
        </SearchIconBox>
        <FileterIconBox>
          <IconBtn>
            <AiFillFilter size={32} />
          </IconBtn>
        </FileterIconBox>
        <ToggleViewBox>
          <ButtonWithIcon left={<BsList size={32} />} text="View" />
        </ToggleViewBox>
      </HeaderBox>
    </>
  );
};

export default ProductHeader;
