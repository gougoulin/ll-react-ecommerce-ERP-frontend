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
  gap: ${space.sSpace};
  align-items: center;
  background-color: ${colors.gray1};
  height: 80px;
  border-radius: ${space.sxSpace};
  display: flex;
  justify-content: space-around;
`;

const HeaderTitleBox = styled.div`
  /* grid-column: 1 / 2; */
  text-align: center;
`;
const HeaderControlBox = styled.div`
  /* grid-column: 2 / 3; */
  justify-content: "center";

  & button:last-child {
    margin-left: ${space.sSpace};
  }
`;

const SearchInput = styled.input`
  min-width: 20em;
  border: 1px solid ${colors.gray5};
  min-height: 2em;
  font-size: 1.6rem;
  line-height: 2em;
  padding: ${space.sxSpace} ${space.space};
  border-radius: ${space.borderRadius};
  opacity: 0;
  margin-right: ${space.sxSpace};

  &:focus {
    opacity: 1;
    border: 1px solid ${colors.gray5};
  }
`;

const SearchInputLabel = styled.label`
  /* grid-column: 3 / 4; */
  margin-right: ${space.sxSpace};
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const HeaderTitle = styled.h2``;

const ToggleViewBox = styled.div`
  /* grid-column: 5 / 6; */
  display: flex;
  align-items: center;

  & *:first-child {
    margin-right: ${space.sSpace};
  }
`;
const FileterIconBox = styled.div`
  /* grid-column: 19 / 20; */
`;

const SearchIconBox = styled.div`
  /* grid-column: 18 / 19; */
`;

const ProductHeader = () => {
  const [_, setHideInput] = useState(true);
  const navigate = useNavigate();
  let searchInputRef = createRef<HTMLInputElement>();
  const onBlur = () => {
    setHideInput(true);
  };
  const onClickSearch = () => {
    setHideInput(false);
    searchInputRef.current && searchInputRef.current.focus();
  };
  const handleCreate = () => {
    navigate("/products/new");
  };

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
            // ref={(x) => {
            //   if (x !== null) {
            //     searchInputRef = { ...searchInputRef, ...{ current: x } };
            //   }
            // }}
            ref={searchInputRef}
            name="products__header--search"
            onBlur={onBlur}
          />
          <SearchIconBox>
            <IconBtn onClick={onClickSearch}>
              <AiOutlineSearch size={32} />
            </IconBtn>
          </SearchIconBox>
        </SearchInputLabel>
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
