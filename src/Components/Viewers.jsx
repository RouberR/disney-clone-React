import React from "react";
import styled from "styled-components";
export const Viewers = () => {
  return (
    <Container>
      <Wrap>
        <img src="/images/viewers/viewers-disney.png" alt="disney" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers/viewers-marvel.png" alt="marvel" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers/viewers-national.png" alt="national" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers/viewers-pixar.png" alt="pixar" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers/viewers-starwars.png" alt="starwars" />
      </Wrap>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 30px;
  padding: 30px 0px 26px;
  display: flex;
  justify-content: space-around;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Wrap = styled.div`
 @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    padding-top: 50%;
  }
    width: 15%;

  padding-top: 10%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.45, 0.45, 0.9) 0s;
  border: 3px solid #222535;

  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    width: 100%;
    z-index: 1;
    top: 0;
  }
  &:hover {
    border: 3px solid white;
  }
`;
