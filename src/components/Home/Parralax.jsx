import React from 'react';
import styled from 'styled-components';

import ImageOne from "./Parallax/ImageOne";
import ImageTwo from "./Parallax/ImageTwo";
import ImageThree from "./Parallax/ImageThree";
import TextBoxOne from "./Parallax/TextBoxOne";
import ImageFour from "./Parallax/ImageFour";
import TextBoxTwo from "./Parallax/TextBoxTwo";
import TextBoxThree from "./Parallax/TextBoxThree";
import TextBoxFour from "./Parallax/TextBoxFour";
import ScrollButton from "./Parallax/ScrollButton";


const Parralax = () => {
  return (
    <>
      <StyledImage>
        <ImageOne />
        <TextBoxOne />
        <ImageTwo />
        <TextBoxTwo />
        <ImageThree />
        <TextBoxThree />
        <ImageFour />
        <TextBoxFour />
      </StyledImage>
      <ScrollButton />
    </>
  );
}
const StyledImage = styled.div`
  scroll-behavior: smooth;
  transition: all ease-in-out;

  animation: fadeInAnimation ease 2s;
  animation-iteration-count: 1;
  animation-fill-mode: backwards;

  @keyframes fadeInAnimation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export default Parralax;