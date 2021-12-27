import React from "react";
import styled from "styled-components";
export const Detail = () => {
  return (
    <Container>
      <Background>
        <img
          src="https://lumiere-a.akamaihd.net/v1/images/image_8bd49560.jpeg?region=0,0,2048,878"
          alt=""
        />
      </Background>

      <ImageTitle>
        <img
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EF5899990675E2E1D0C274235654339E0BFE5F3DBCFC00B3A472C2B6CFEE1EA/scale?width=1440&aspectRatio=1.78&format=png"
          alt=""
        />
      </ImageTitle>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow: hidden;
  display: block;
  top: 70px;
  padding: 0;
`;

const Background = styled.div`
  left: 0px;
  opacity: 0.7;
  position: fixed;
  right: 0px;
  top: 0px;
  z-index: -1;

  img {
    width: 100vw;
    height: 100vh;

    @media (max-width: 768px) {
      width: initial;
    }
  }
`;

const ImageTitle = styled.div`
     display: flex;
    text-align: flex-end;
    justify-content: flex-start;
    margin: 30px;
    
  img {
    width: 40%;
  }
`;
