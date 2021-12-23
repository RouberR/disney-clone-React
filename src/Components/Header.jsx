import React from "react";
import styled from "styled-components";
export const Header = () => {
  return (
    <Nav>
      <Logo src="/images/logo.svg" />

      <NavMenu>
        <a href="/home">
          <img src="/images/home-icon.svg" alt="home" />
          <span>HOME</span>
        </a>
        <a href="/search">
          <img src="/images/search-icon.svg" alt="search" />
          <span>SEARCH</span>
        </a>
        <a href="/watchlist">
          <img src="/images/watchlist-icon.svg" alt="watchlist" />
          <span>WATCHLIST</span>
        </a>
        <a href="/original-icon">
          <img src="/images/original-icon.svg" alt="original" />
          <span>ORIGINALS</span>
        </a>
        <a href="/movie">
          <img src="/images/movie-icon.svg" alt="movie" />
          <span>MOVIES</span>
        </a>
        <a href="/series">
          <img src="/images/series-icon.svg" alt="series" />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <Login>Login</Login>
    </Nav>
  );
};

const Nav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #0a1130;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;

const Logo = styled.img`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 25px;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }

    span {
      font-size: 15px;
      letter-spacing: 1.4px;
      line-height: 1;
      padding: 2px, 0px;
      white-space: nowrap;
      position: relative;

      &:before {
        left: 0px;
        background-color: white;
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.45, 0.45, 0.9) 0s;
        visibility: hidden;
        width: auto;
      }
    }

    &:hover {
      span: before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1;
      }
    }
  }

  @media (max-width: 900px) {
    display: none;
  }
`;


const Login = styled.a`
background-color: #0a1130;
padding: 9px 18px;
text-transform: uppercase;
letter-spacing: 1.5px;
border: 1px solid #f9f9f9;
border-radius: 4px;
transition: all 0.2s ease 0s;

&:hover{
    background-color: #f9f9f9;
    color: black;
    border-color: transparent;
}

`
