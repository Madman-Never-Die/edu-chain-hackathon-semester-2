import Head from "next/head";
import styled from "styled-components";
import React, { FC } from "react";
import { useRouter } from "next/router";
import ImageSlider from "../components/ImageSlider";
import Card from "../components/Card";

const MainPage: FC = () => {
  const router = useRouter()

  const handleButtonClick = (coinData: { title: string, image: string, description: string }) => {
    router.push({
      pathname: '/detail',
      query: {
        title: coinData.title,
        image: coinData.image,
        description: coinData.description
      }
    });
  };

  return (
    <Container>


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
        {/*<BackgroundImage>*/}
        {/*  <OverlayText>Maximize Your Reach with A²</OverlayText>*/}
        {/*</BackgroundImage>*/}
        <div>
          <h1 style={{textAlign: 'center'}}>Welcome to the Slider</h1>
          <ImageSlider/>
        </div>

        {/*<AdSection>*/}
        {/*  <AdImage src="/index1.png" alt="Create Ad"/>*/}
        {/*  <AdText>*/}
        {/*    Create an ad. Set up your campaign in minutes. Pay for results, not*/}
        {/*    clicks.*/}
        {/*  </AdText>*/}
        {/*  <GetStartedButton onClick={handleCreateAdClick}>*/}
        {/*    Get Started*/}
        {/*  </GetStartedButton>*/}
        {/*</AdSection>*/}

        <div style={{display:"flex", flexDirection: "column", width: "1000px"}}>
          <div style={{display: "flex", flexDirection: "row"}}>
            <Card image={"/bitcoin.png"} title={"BTC"} description={"Bitcoin is a decentralized cryptocurrency originally described in a 2008 whitepaper by a person, or group of people, using the alias Satoshi Nakamoto. It was launched soon after, in January 2009."} buttonText={"button"}
                  onButtonClick={() => handleButtonClick({ title: "BTC", image: "/bitcoin.png", description: "Bitcoin description" })}/>

            <Card image={"/ethereum.png"} title={"ETH"} description={"Ethereum is a decentralized open-source blockchain system that features its own cryptocurrency, Ether. ETH works as a platform for numerous other cryptocurrencies, as well as for the execution of decentralized smart contracts."} buttonText={"button"}
                  onButtonClick={() => handleButtonClick({ title: "ETH", image: "/ethereum.png", description: "Ethereum description" })}
            />
            <Card image={"/solana.png"} title={"SOL"} description={"Solana is a highly functional open source project that banks on blockchain technology’s permissionless nature to provide decentralized finance (DeFi) solutions. While the idea and initial work on the project began in 2017, Solana was officially launched in March 2020 by the Solana Foundation with headquarters in Geneva, Switzerland."} buttonText={"button"}
                  onButtonClick={() => handleButtonClick({ title: "SOL", image: "/solana.png", description: "Solana description" })}
            />
          </div>
          <div style={{display: "flex", flexDirection: "row"}}>
            <Card image={"/xrp.png"} title={"XRP"} description={"Launched in 2012, the XRP Ledger (XRPL) is an open-source, permissionless and decentralized technology. Benefits of the XRP Ledger include its low-cost ($0.0002 to transact), speed (settling transactions in 3-5 seconds), scalability (1,500 transactions per second) and inherently green attributes (carbon-neutral and energy-efficient). The XRP Ledger also features the first decentralized exchange (DEX) and custom tokenization capabilities built into the protocol. Since 2012, the XRP Ledger has been operating reliably, having closed 70 million ledgers."} buttonText={"button"}
                  onButtonClick={() => handleButtonClick({ title: "XRP", image: "/xrp.png", description: "Xrp description" })}
            />
            <Card image={"/doge.png"} title={"DOGE"} description={"Dogecoin (DOGE) is based on the popular \"doge\" Internet meme and features a Shiba Inu on its logo. The open-source digital currency was created by Billy Markus from Portland, Oregon and Jackson Palmer from Sydney, Australia, and was forked from Litecoin in December 2013. Dogecoin's creators envisaged it as a fun, light-hearted cryptocurrency that would have greater appeal beyond the core Bitcoin audience, since it was based on a dog meme. Tesla CEO Elon Musk posted several tweets on social media that Dogecoin is his favorite coin."} buttonText={"button"}
                  onButtonClick={() => handleButtonClick({ title: "DOGE", image: "/doge.png", description: "Doge description" })}
            />
            <Card image={"/cardano.png"} title={"ADA"} description={"Cardano is a proof-of-stake blockchain platform that says its goal is to allow “changemakers, innovators and visionaries” to bring about positive global change.\n" +
                "\n" +
                "To learn more about this project, check out our deep dive of Cardano.\n" +
                "\n" +
                "The open-source project also aims to “redistribute power from unaccountable structures to the margins to individuals” — helping to create a society that is more secure, transparent and fair."} buttonText={"button"}
                  onButtonClick={() => handleButtonClick({ title: "ADA", image: "/cardano.png", description: "Cardano description" })}
            />
          </div>
        </div>
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



const Logo = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #7b44ff;
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

export default MainPage;
