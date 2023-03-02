import { AiOutlinePlus } from "react-icons/ai";
import styled from "styled-components";
import { colors, space } from "../../assets/css/params";
import { createRef, SyntheticEvent, useState, useEffect } from "react";

const ImageBox = styled.div`
  border: 1px solid ${colors.gray5};
  border-radius: ${space.borderRadius};
  font-size: 1.6rem;
  max-height: 5em;
  min-height: 5em;
  max-width: 5em;
  min-width: 5em;
  margin-right: ${space.sSpace};
  display: flex;
  place-items: center;
  place-content: center;
  cursor: pointer;
`;
const FileInput = styled.input`
  display: none;
`;

type ImagePreviewProps = {
  seen?: "visible" | "none";
};
const ImagePreview = styled.img`
  max-width: 100%;
  max-height: 100%;
  visibility: ${({ seen }: ImagePreviewProps) => seen || "none"};
`;

type StyledAiOutlinePlusProps = { view?: "none" | "inline-block" };
const StyledAiOutlinePlus = styled(AiOutlinePlus)`
  display: ${({ view }: StyledAiOutlinePlusProps) =>
    typeof view == "undefined" ? "inline-block" : "none"};
`;

const UploadImage = () => {
  const [hasImage, setHasImage] = useState(false);
  const fileInputRef = createRef<HTMLInputElement>();
  const imagePreviewRef = createRef<HTMLImageElement>();
  const handleFileUpload = () => {
    fileInputRef.current && fileInputRef.current.click();
  };
  const onChange = (ev: SyntheticEvent<HTMLInputElement>) => {
    let url = "",
      img = imagePreviewRef.current;
    if (
      fileInputRef.current &&
      fileInputRef.current.files !== null &&
      fileInputRef.current.files.length > 0
    ) {
      let file = fileInputRef.current.files[0];
      url = URL.createObjectURL(file);
    }
    if (img !== null && url.length > 0) {
      img.src = url;
      setHasImage(true);
    } else {
      setHasImage(false);
    }
  };
  console.log(hasImage ? "none" : "inline-block");
  return (
    <ImageBox onClick={handleFileUpload}>
      <FileInput
        onChange={onChange}
        ref={fileInputRef}
        type="file"
        accept="iamge/jpg, image/jpeg"
      />
      <ImagePreview
        seen={hasImage ? "visible" : undefined}
        ref={imagePreviewRef}
      />
      <StyledAiOutlinePlus
        view={hasImage ? "none" : "inline-block"}
        size={48}
        color={colors.gray5}
      />
    </ImageBox>
  );
};

export default UploadImage;
