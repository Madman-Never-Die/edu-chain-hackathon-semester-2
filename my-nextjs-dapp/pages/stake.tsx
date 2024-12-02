import styled from "styled-components";
import { FC } from "react";
import { useRouter } from "next/router"; // useRouter 추가

const Stake: FC = () => {
  const router = useRouter();

  const handleDepositClick = () => {
    router.push("/createAd"); // "createAd" 페이지로 이동
  };

  return (
    <Container>
      <Navbar>
        <Logo>EduChain</Logo>
        <NavLinks>
          <NavLink>Connect Wallet</NavLink>
          <SettingsIcon>⚙</SettingsIcon>
        </NavLinks>
      </Navbar>
      <Content>
        <Title>Stake EDU Tokens</Title>
        <Summary>
          <SummaryBox>
            <Label>Total Staked</Label>
            <Value>10,000</Value>
          </SummaryBox>
          <SummaryBox>
            <Label>Your Balance</Label>
            <Value>1,000</Value>
          </SummaryBox>
        </Summary>
        <Form>
          <Label>Amount to stake</Label>
          <Input type="number" placeholder="0.00" />
          <Info>
            <InfoItem>
              <Icon>ℹ️</Icon> 5,000 Estimated daily ad impressions
            </InfoItem>
            <InfoItem>
              <Icon>ℹ️</Icon> 100 EDU Minimum staking amount
            </InfoItem>
            <InfoItem>
              <Icon>ℹ️</Icon> $0.50 (0.001 ETH) Estimated gas fees
            </InfoItem>
          </Info>
          <ButtonGroup>
            <PrimaryButton onClick={handleDepositClick}>Deposit</PrimaryButton>
            <SecondaryButton>Cancel</SecondaryButton>
          </ButtonGroup>
        </Form>
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
  padding: 0 20px;
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

const NavLink = styled.button`
  background-color: #21262d;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #30363d;
  }
`;

const SettingsIcon = styled.div`
  font-size: 20px;
  cursor: pointer;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 40px 0;
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Summary = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 800px;
  margin-bottom: 30px;
`;

const SummaryBox = styled.div`
  background-color: #161b22;
  padding: 20px;
  border-radius: 10px;
  flex: 1;
  margin: 0 10px;
`;

const Label = styled.p`
  font-size: 14px;
  color: #aaa;
  margin-bottom: 10px;
`;

const Value = styled.h3`
  font-size: 24px;
  font-weight: bold;
`;

const Form = styled.div`
  background-color: #161b22;
  padding: 30px;
  border-radius: 10px;
  width: 100%;
  max-width: 600px;
`;

const Input = styled.input`
  width: 100%;
  padding: 15px;
  margin-bottom: 20px;
  border: none;
  border-radius: 5px;
  background-color: #21262d;
  color: white;
  font-size: 16px;

  &::placeholder {
    color: #aaa;
  }
`;

const Info = styled.div`
  margin-bottom: 20px;
`;

const InfoItem = styled.p`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #aaa;
  margin-bottom: 10px;
`;

const Icon = styled.span`
  margin-right: 10px;
  font-size: 16px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

const PrimaryButton = styled.button`
  flex: 1;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 15px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const SecondaryButton = styled.button`
  flex: 1;
  background-color: #30363d;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 15px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #50575d;
  }
`;

export default Stake;
