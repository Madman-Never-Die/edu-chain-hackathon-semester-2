import Head from "next/head";
import styled from "styled-components";
import { FC } from "react";
import { useRouter } from "next/router";

const Home: FC = () => {
  const router = useRouter();

  const handleCreateAdClick = () => {
    router.push("/main");
  };

  return (
    <Container>
      <Head>
        <title>A² Finance</title>
      </Head>

      <Navbar>
        <Logo>A² Finance</Logo>
        <NavLinks>
          <NavLink>Analytics</NavLink>
          <NavLink>Help</NavLink>
          <CreateAdButton onClick={handleCreateAdClick}>
            Create Ad
          </CreateAdButton>
        </NavLinks>
      </Navbar>

      <HeroSection>
        <HeroText>
          <h1>Advertise Smarter, Reach Wider</h1>
          <p>
            Simplify your ad campaigns with A² Finance. Build, launch, and
            manage ads effortlessly with results-driven solutions.
          </p>
          {/* <HeroButtons>
            <ButtonPrimary onClick={handleCreateAdClick}>
              Get Started
            </ButtonPrimary>
            <ButtonSecondary>Learn More</ButtonSecondary>
          </HeroButtons> */}
        </HeroText>
        {/* <HeroImage src="/hero-image.png" alt="Hero" /> */}
      </HeroSection>

      {/* <Tabs>
        <Tab>Advertiser</Tab>
        <Tab>Publisher</Tab>
      </Tabs> */}

      <Content>
        <BackgroundImage>
          <OverlayText>Maximize Your Reach with A²</OverlayText>
        </BackgroundImage>

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

      <Footer>
        <FooterContent>
          <p>
            © 2024 A² Finance. Powered by
            <a
              href="https://madmanneverdie"
              target="_blank"
              rel="noopener noreferrer"
            >
              madmanneverdie
            </a>
            .
          </p>
        </FooterContent>
      </Footer>
    </Container>
  );
};

/** Styled Components */
const Container = styled.div`
  background-color: #000;
  color: #e0e0e0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  background: #ffffff;
  border-bottom: 1px solid #ffffff;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Logo = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #7b44ff;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const NavLink = styled.button`
  background: none;
  border: none;
  color: #b3b3b3;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    color: #7b44ff;
  }
`;

const CreateAdButton = styled.button`
  background-color: #7b44ff;
  color: #fff;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #531fbd;
  }
`;

const HeroSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px;
  background-color: #1e1e1e;
`;

const HeroText = styled.div`
  max-width: 50%;

  h1 {
    font-size: 2.5rem;
    color: #ffffff;
  }

  p {
    font-size: 1.2rem;
    color: #b3b3b3;
    margin-top: 10px;
  }
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

const ButtonPrimary = styled.button`
  background-color: #7b44ff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #531fbd;
  }
`;

const ButtonSecondary = styled.button`
  background-color: transparent;
  color: #7b44ff;
  border: 2px solid #7b44ff;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #7b44ff;
    color: white;
  }
`;

const HeroImage = styled.img`
  max-width: 40%;
  border-radius: 10px;
`;

const Tabs = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  background: #1e1e1e;
`;

const Tab = styled.div`
  background-color: #333;
  color: #b3b3b3;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    color: white;
    background-color: #7b44ff;
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
  align-items: flex-end;
  justify-content: center;
  padding: 20px;
`;

const OverlayText = styled.h2`
  font-size: 28px;
  font-weight: bold;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
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
  color: #e0e0e0;
`;

const GetStartedButton = styled.button`
  background-color: #7b44ff;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #531fbd;
  }
`;

const Footer = styled.footer`
  background-color: #1e1e1e;
  color: #b3b3b3;
  padding: 20px;
  text-align: center;
`;

const FooterContent = styled.div`
  font-size: 14px;

  a {
    color: #7b44ff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default Home;
