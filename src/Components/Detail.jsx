import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../farebase";
import { doc, getDoc } from "firebase/firestore";
export const Detail = () => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState({});

  const getMovies = async () => {
    const docRef = doc(db, "movies", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setDetailData(docSnap.data());
    } else {
      console.log("No such document!");
    }
  };

  useEffect(() => {
    getMovies();
  }, [id]);
  return (
    <Container>
      <Background>
        <img src={detailData.backgroundImg} alt="" />
      </Background>

      <ImageTitle>
        <img src={detailData.titleImg} alt="" />
      </ImageTitle>
      <ContentMeta>
        <Controls>
          <Player>
            <img src="/images/ControlsButton/play-icon-black.png" alt="Play" />
            <span>Play</span>
          </Player>
          <Trailer>
            <img
              src="/images/ControlsButton/play-icon-white.png"
              alt="Trailer"
            />
            <span>Trailer</span>
          </Trailer>
        </Controls>
        <Title>{detailData.title}</Title>
        <SubTitle>{detailData.subTitle}</SubTitle>

        <Description>{detailData.description}</Description>
      </ContentMeta>
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

const ContentMeta = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const Controls = styled.div`
  padding: 15px;
  margin: 10px;
  display: flex;
`;

const Player = styled.button`
  display: flex;
  padding: 10px;
  font-size: 16px;
  text-align: center;
  align-items: center;
  width: 130%;

  border: 2px solid white;
  cursor: pointer;
  border-radius: 5spx;
  justify-content: center;
  text-transform: uppercase;
  margin: 10px;

  &:hover {
    background: grey;
  }

  @media (max-width: 768px) {
    height: 50%;
  }
`;

const Trailer = styled(Player)`
  background: rgba(0, 0, 0, 0.3);
  color: white;
  border: 1px solid white;
`;

const SubTitle = styled.div`
  color: white;
  font-size: 24px;
  padding: 15px;
  margin-left: 16px;
`;

const Title = styled(SubTitle)`
  font-size: 32px;
  font-weight: bold;
`;
const Description = styled.div`
  color: white;
  font-size: 24px;
  padding: 15px;
  margin-left: 16px;
  width: 50%;
  line-height: 1.4;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
