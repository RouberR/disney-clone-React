import React from "react";
import styled from "styled-components";
import { ImgSlider } from "./ImgSlider";
import { Viewers } from "./Viewers";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { collection, getDocs } from "firebase/firestore";
import {
  selectNewDisney,
  selectOriginal,
  selectRecommend,
  selectTrending,
  setMovies,
} from "../store/movie/movieSlice";
import { selectUserName } from "../store/userSlice";
import db from "../farebase";
import { Category } from "./MovieCategory/Category";
export const Home = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recomends = [];
  let newDisneys = [];
  let originals = [];
  let trendings = [];

  const Trending = useSelector(selectTrending);
  const reccomends = useSelector(selectRecommend);
  const NewDisney = useSelector(selectNewDisney);
  const Original = useSelector(selectOriginal);
  const getMovies = async () => {
    const querySnapshot = await getDocs(collection(db, "movies"));
    querySnapshot.docs.map((doc) => {
      switch (doc.data().type) {
        case "Recommended":
          recomends = [...recomends, { id: doc.id, ...doc.data() }];
          break;
        case "NewDisneys":
          newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
          break;
        case "Originals":
          originals = [...originals, { id: doc.id, ...doc.data() }];
          break;
        case "Trendings":
          trendings = [...trendings, { id: doc.id, ...doc.data() }];
          break;
        default: {
          console.log("Error: don't exist type");
        }
      }
    });

    dispatch(
      setMovies({
        recommend: recomends,
        newDisney: newDisneys,
        original: originals,
        trending: trendings,
      })
    );
  };

  useEffect(() => {
    getMovies();
  }, [userName]);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Category Title="Recommended for You" Selector={reccomends} />
      <Category Title="New Disneys" Selector={NewDisney} />
      <Category Title="Originals" Selector={Original} />
      <Category Title="Trendings" Selector={Trending} />
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;
