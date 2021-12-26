import React from "react";
import styled from "styled-components";
export const Viewers = () => {
  return (
    <Container>
      <Wrap>
        <img src="/images/viewers/viewers-disney.png" alt="disney" />
        <video loop={true} playsInline={true} autoPlay={true} muted={true}>
          <source src="/videos/disney.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers/viewers-marvel.png" alt="marvel" />
        <video autoPlay={true} loop={true} playsInline={true} muted={true}>
          <source src="/videos/marvel.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers/viewers-national.png" alt="national" />
        <video autoPlay={true} loop={true} playsInline={true} muted={true}>
          <source src="/videos/national-geographic.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers/viewers-pixar.png" alt="pixar" />
        <video autoPlay={true} loop={true} playsInline={true} muted={true}>
          <source src="/videos/pixar.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers/viewers-starwars.png" alt="starwars" />
        <video autoPlay={true} loop={true} playsInline={true} muted={true}>
          <source src="/videos/star-wars.mp4" type="video/mp4" />
        </video>
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
    margin-top:10px;
    padding-top: 50%;
  }
  width: 18%;

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
    @media (max-width: 768px) {
      transform: scale(1.02);
  }

    border: 3px solid white;
    transform: scale(1.05);

    video {
      opacity: 1;
    }
  }

  video {
    width: 100%;
    height: 100%;
    inset: 0px;
    display: block;
    top: 0;
    object-fit: cover;
    position: absolute;
    z-index: 0;
    opacity: 0;
  }
`;
