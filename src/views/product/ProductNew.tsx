import { createRef, SyntheticEvent, useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import styled from "styled-components";
import { colors, space } from "../../assets/css/params";
import ButtonBase from "../../components/button/ButtonBase";

const MainBox = styled.main`
  padding: ${space.space};
  margin-top: ${space.mSpace};
  background: ${colors.gray1};
`;

const NewProductForm = styled.form`
  max-width: 60em;
  margin: 0 auto;
  padding-bottom: ${space.lSpace};
`;
const MainTitle = styled.h2`
  font-size: 2rem;
  margin: ${space.space};
  margin-bottom: ${space.lSpace};
`;
const FormSection = styled.section`
  display: grid;
  grid-template-columns: 8em 1fr;
  align-items: start;
  gap: ${space.mSpace};
`;
const SectionTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: ${space.space};
  grid-column: 1 / 3;
`;
const RowBox = styled.div`
  display: flex;
  flex-flow: row wrap;
  /* margin-top: ${space.space}; */
`;

const Select = styled.select`
  width: 20em;
  font-size: 1.6rem;
  padding: ${space.sSpace};
  border-radius: ${space.borderRadius};
  margin-right: ${space.sSpace};
  border: 1px solid ${colors.gray5};
  border-radius: ${space.borderRadius};
`;
const SelectOption = styled.option``;

const Label = styled.label`
  margin-right: ${space.sSpace};
  input {
    accent-color: ${colors.primary.base};
  }
`;

const TitleInput = styled.input`
  line-height: 2em;
  font-size: 1.6rem;
  padding: 0 ${space.space};
  border: 1px solid ${colors.gray5};
  border-radius: ${space.borderRadius};
`;

const ProductDescriptionInput = styled.textarea`
  height: 8em;
  border: 1px solid ${colors.gray5};
  border-radius: ${space.borderRadius};
  padding: ${space.space};
  font-size: 1.6rem;
  line-height: 1.5em;
  margin-bottom: ${space.mSpace};
`;
const ImageBox = styled.div`
  border: 1px solid ${colors.gray5};
  border-radius: ${space.borderRadius};
  height: 80px;
  width: 80px;
  margin-right: ${space.sSpace};
  display: flex;
  place-items: center;
  place-content: center;
  cursor: pointer;
`;
const mockCategory: Record<string, string[]> = {
  Man: ["Man Shoes", "Man ties"],
  Woman: ["Bags", "Dress"],
  Infant: ["Mile", "Snakes"],
  Kid: ["Sports", ""]
};

const StyledButtonBase = styled(ButtonBase)`
  margin-right: 1em;
  margin-top: 2em;
`;

const UploadImage = () => {
  return (
    <ImageBox>
      <AiOutlinePlus size={48} color={colors.gray5} />
    </ImageBox>
  );
};

const ProductNew = () => {
  const [category, setCategory] = useState<string | undefined>();
  const [categories, setCategories] = useState<string[] | null>(null);
  const [subCategories, setSubCategories] = useState<string[] | null>(null);
  const [carriers, setCarriers] = useState<string[] | null>(null);

  useEffect(() => {
    setCategories(Object.getOwnPropertyNames(mockCategory));
    return () => {};
  }, []);

  const catRef = createRef<HTMLSelectElement>();

  const options =
    categories &&
    categories.map((it: string, id) => {
      return (
        <SelectOption key={id} value={it}>
          {it}
        </SelectOption>
      );
    });
  const subOptions =
    subCategories &&
    subCategories.map((it: string, id) => {
      return (
        <SelectOption key={id} value={it}>
          {it}
        </SelectOption>
      );
    });
  const carrierOptions =
    carriers &&
    carriers.map((it: string, id) => {
      return (
        <SelectOption key={id} value={it}>
          {it}
        </SelectOption>
      );
    });
  const handleCatSelect = (ev: SyntheticEvent) => {
    let selected = catRef && catRef.current ? catRef.current.value : "";
    if (selected !== null) {
      setCategory(selected);
      let sub = mockCategory[selected];
      setSubCategories(sub);
    }
  };
  return (
    <MainBox>
      <MainTitle>New Product</MainTitle>
      <NewProductForm>
        <FormSection>
          <SectionTitle>1. Base Info</SectionTitle>
          <span>Category</span>
          <RowBox>
            <Select ref={catRef} onChange={handleCatSelect} name="category">
              <SelectOption defaultValue={""}>
                Please select category
              </SelectOption>
              {options}
            </Select>
            <Select name="subCategory">
              <SelectOption defaultValue={""}>
                Please select subcategory
              </SelectOption>
              {subOptions}
            </Select>
          </RowBox>
          <span>Type</span>
          <RowBox>
            <Label htmlFor="">
              <input type="radio" name="product-type" />
              Normal product
            </Label>
            <Label htmlFor="">
              <input type="radio" name="product-type" />
              Pay by friend product
            </Label>
            <Label htmlFor="">
              <input type="radio" name="product-type" />
              Normal / Pay by friend
            </Label>
          </RowBox>
          <span>Title</span>
          <TitleInput type="text" />
          <span>Sub-title</span>
          <TitleInput type="text" />
          <span>Images</span>
          <RowBox>
            <UploadImage />
            <UploadImage />
            <UploadImage />
            <UploadImage />
          </RowBox>
          <span>Description</span>
          <ProductDescriptionInput placeholder="input here ..." />
        </FormSection>
        <FormSection>
          <SectionTitle>2. Logistic Service</SectionTitle>
          <span>Type</span>
          <Select name="carrier">
            <SelectOption defaultValue={""}>Please select carrier</SelectOption>
            {carrierOptions}
          </Select>
          <span></span>
          <RowBox>
            <StyledButtonBase width="10em" type="reset">
              Save
            </StyledButtonBase>
            <StyledButtonBase width="10em" type="submit">
              submit
            </StyledButtonBase>
          </RowBox>
        </FormSection>
      </NewProductForm>
    </MainBox>
  );
};

export default ProductNew;
