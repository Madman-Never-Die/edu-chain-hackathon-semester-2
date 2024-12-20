import Head from "next/head";
import styled from "styled-components";

// Add this interface above the ImageSection styled component
interface ImageSectionProps {
  background?: string;
}

const Container = styled.div`
  font-family: "Arial", sans-serif;
  margin: 0;
  padding: 0;
`;

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
`;

const HeroSection = styled.section`
  text-align: center;
  padding: 100px 20px;
  background: url("/hero-background.jpg") no-repeat center center / cover;
  color: #fff;

  h1 {
    font-size: 4rem;
    font-weight: bold;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 40px;
  }

  button {
    margin: 0 10px;
    padding: 15px 40px;
    font-size: 1.2rem;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: #fff;
    background: #7b44ff;

    &:hover {
      background: #531fbd;
    }
  }

  button.secondary {
    background: transparent;
    border: 2px solid #fff;

    &:hover {
      background: #fff;
      color: #7b44ff;
    }
  }
`;

const Section = styled.section`
  padding: 80px 50px;
  text-align: center;

  h2 {
    font-size: 3rem;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.8;
    margin-bottom: 40px;
  }

  button {
    padding: 15px 30px;
    font-size: 1rem;
    background: #7b44ff;
    color: #fff;
    border: none;
    border-radius: 5px;

    &:hover {
      background: #531fbd;
    }
  }
`;

const ImageSection = styled.div<ImageSectionProps>`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 50px;
  background: ${({ background }) => background || "#f9f9f9"};

  img {
    max-width: 50%;
    height: auto;
  }

  .text {
    max-width: 40%;
    text-align: left;
  }

  .text h3 {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }

  .text p {
    font-size: 1.2rem;
    line-height: 1.8;
    margin-bottom: 20px;
  }
`;

const Footer = styled.footer`
  text-align: center;
  padding: 50px;
  background: #7b44ff;
  color: #fff;

  a {
    color: #fff;
    text-decoration: underline;

    &:hover {
      color: #ccc;
    }
  }
`;

export default function MainPage() {
  return (
    <Container>
      <Head>
        <title>A² Finance</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header>
        <Logo>A² Finanace</Logo>
        <nav>
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </Header>

      {/* Hero Section */}
      <HeroSection>
        <h1>The First Advertising Blockchain Network</h1>
        <p>
          A² is a Advertising network that makes it easy for anyone to easely
          advertise their own blockchain.
        </p>
        <div>
          <button>Build A²</button>
          <button className="secondary">Explore</button>
        </div>
      </HeroSection>

      {/* Features Section */}
      <Section id="features">
        <h2>Features</h2>
        <p>
          Build liquidity, advertise, and earn blockchain applications with A².
        </p>
        <button>Learn More</button>
      </Section>

      {/* Image Sections */}
      <ImageSection background="#3a3636">
        <div className="text">
          <h3>Build Whatever</h3>
          <p>Launch a blockchain your own Advertise chain.</p>
        </div>
        <img src="/arbitrum.jpg" alt="Feature Image 1" />
      </ImageSection>

      <ImageSection background="#3a3636">
        <img src="/opencampus.png" alt="Feature Image 2" />
        <div className="text">
          <h3>Access</h3>
          <p>Tap to Advertising your own protocol and earn token.</p>
        </div>
      </ImageSection>

      {/* Footer */}
      <Footer>
        <p>
          © 2024 madmanneverdie. Powered by{" "}
          <a href="madmanneverdie" target="_blank" rel="noopener noreferrer">
            madmanneverdie
          </a>
          .
        </p>
      </Footer>
    </Container>
  );
}