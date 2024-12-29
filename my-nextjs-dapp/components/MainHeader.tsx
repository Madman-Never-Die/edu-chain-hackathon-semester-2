import styled from "styled-components";
import React from "react";
import {useRouter} from "next/router";

const MainHeader = () => {
  const router = useRouter()

  const handleButtonClick = (url: string) => {
    router.push(url);
  }

  // 특정 URL에 따라 헤더 스타일 변경
  const renderHeaderStyle = () => {
    if (router.pathname === "/") {
      return (
          <nav>
            <a href="#features">Features</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
      );
    } else if (router.pathname === "/Main") {
      return (
          <nav>
            <a href="#">Analytics</a>
            <a href="#">Help</a>
            <a href="#" onClick={() => {
              handleButtonClick("/createAd")
            }}>Create Ad</a>
          </nav>
      );
    } else if (router.pathname === "/createAd") {
      return (
          <nav>
            <a href="#">Home</a>
            <a href="#">Browse</a>
            <a href="#">Create</a>
            <a href="#">Activity</a>
          </nav>
      );
    }
  };

  return (
      <>
        <Header>
          <Logo onClick={() => {handleButtonClick("/")}}>A² Finance</Logo>
          {renderHeaderStyle()}
        </Header>
      </>
  );
}

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  background: #fff;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  height: 30px;
  nav a {
    margin: 0 20px;
    text-decoration: none;
    font-weight: bold;
    color: #000;

    &:hover {
      color: #7b44ff;
    }
  }
`;


const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #7b44ff;
  cursor: pointer;
`;

const ConnectWalletButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

export default MainHeader