import styled from "styled-components";
import { FC } from "react";
import { useRouter } from "next/router"; // useRouter 추가

const Home: FC = () => {
  const router = useRouter();

  const handleCreateAdClick = () => {
    router.push("/connect-wallet"); // "/connect-wallet"으로 이동
  };

  return (
    <Container>
      {/* Navbar */}
      <Navbar>
        <Logo>A2 Finance</Logo>
        <NavLinks>
          <NavLink>Analytics</NavLink>
          <NavLink>Help</NavLink>
          <CreateAdButton onClick={handleCreateAdClick}>
            Create Ad
          </CreateAdButton>
        </NavLinks>
      </Navbar>

      {/* Tabs */}
      <Tabs>
        <Tab>Advertiser</Tab>
        <Tab>Publisher</Tab>
      </Tabs>

      {/* Content */}
      <Content>
        {/* Background Image Section */}
        <BackgroundImage>
          <OverlayText>Reach your audience on the web</OverlayText>
        </BackgroundImage>

        {/* Create Ad Section */}
        <AdSection>
          <AdImage src="/index1.png" alt="Create Ad" />
          <AdText>
            Create an ad. Set up your campaign in minutes. Pay for results, not
            clicks.
          </AdText>
          <GetStartedButton onClick={handleCreateAdClick}>
            Get Started
          </GetStartedButton>
        </AdSection>
      </Content>
    </Container>
  );
};

/** Styled Components */
const Container = styled.div`
  background-color: black;
  color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #333;
`;

const Logo = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const NavLink = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const CreateAdButton = styled.button`
  background-color: blue;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  margin-left: 20px;

  &:hover {
    background-color: darkblue;
  }
`;

const Tabs = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  padding: 20px;
  padding-left: 30px;
`;

const Tab = styled.div`
  background-color: #333;
  color: gray;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    color: white;
    background-color: blue;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding: 20px;
`;

const BackgroundImage = styled.div`
  position: relative;
  width: 100%;
  max-width: 1000px;
  height: 400px;
  background-image: url("/index2.png");
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  margin-bottom: 20px;
  display: flex;
  align-items: flex-end; /* 텍스트를 아래쪽에 위치 */
  justify-content: center;
  padding: 20px;
`;

const OverlayText = styled.h2`
  position: relative;
  font-size: 28px;
  font-weight: bold;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  text-align: center;
  z-index: 1; /* 텍스트가 위에 나타나도록 설정 */
`;

const AdSection = styled.div`
  background-color: #222;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const AdImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 250px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const AdText = styled.p`
  font-size: 16px;
  color: lightgray;
  margin: 0;
`;

const GetStartedButton = styled.button`
  background-color: blue;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: darkblue;
  }
`;

export default Home;
