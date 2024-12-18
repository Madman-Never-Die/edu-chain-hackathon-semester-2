import styled from "styled-components";
import { FC } from "react";
import { useRouter } from "next/router"; // useRouter 추가
import Image from "next/image";
import { useOCAuth } from "@opencampus/ocid-connect-js";

const ConnectWallet: FC = () => {
  const router = useRouter();
  const { ocAuth } = useOCAuth();

  const handleCreateAdClick = () => {
    router.push("/connect-wallet"); // "/connect-wallet"으로 이동
  };

  const handleConnectWallet = () => {
    router.push("/stake"); // "/stake"로 이동
  };

  const handleLogin = async () => {
    try {
      await ocAuth.signInWithRedirect({ state: "opencampus" });
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <Container>
      <Navbar>
        <Logo>A² Finance</Logo>
        <NavLinks>
          <NavLink>Analytics</NavLink>
          <NavLink>Help</NavLink>
          <CreateAdButton onClick={handleCreateAdClick}>
            Create Ad
          </CreateAdButton>
          <ProfileIcon>
            <Image
              src="/profile-icon.png"
              alt="Profile"
              width={40}
              height={40}
            />
          </ProfileIcon>
        </NavLinks>
      </Navbar>
      <Content>
        <Title>Create a new ad</Title>
        <Description>
          AdGenie is a decentralized advertising platform that enables you to
          easily create and manage ads for web3 projects. All ads run through
          the AdGenie marketplace, and you can track impressions, clicks, and
          conversions in real time.
        </Description>
        {/*<Button onClick={handleConnectWallet}>Connect Wallet</Button>*/}
        <Button onClick={handleLogin}>Connect Wallet</Button>
        <FooterLinks>
          <FooterLink href="#">Don&apos;t have a wallet?</FooterLink>
          <FooterLink href="#">Learn more about AdGenie</FooterLink>
        </FooterLinks>
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

const Navbar = styled.nav`
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

const NavLink = styled.a`
  color: white;
  font-size: 16px;
  text-decoration: none;
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

const ProfileIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 40px;
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 16px;
  color: #aaa;
  max-width: 600px;
  margin-bottom: 40px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 15px 30px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const FooterLinks = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const FooterLink = styled.a`
  color: #aaa;
  font-size: 14px;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export default ConnectWallet;
