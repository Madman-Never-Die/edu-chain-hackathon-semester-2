import styled from "styled-components";
import { FC } from "react";
import { useRouter } from "next/router"; // useRouter 추가

const CreateAd: FC = () => {
  const router = useRouter();

  const handleNextClick = () => {
    // "Next" 버튼 클릭 시 Dashboard 페이지로 이동
    router.push("/DashBoard");
  };

  return (
    <Container>
      <Navbar>
        <Logo>A²</Logo>
        <NavLinks>
          <NavLink>Home</NavLink>
          <NavLink>Browse</NavLink>
          <NavLink>Create</NavLink>
          <NavLink>Activity</NavLink>
          <ConnectWalletButton>Connect Wallet</ConnectWalletButton>
        </NavLinks>
      </Navbar>
      <Content>
        <Title>Create an Ad</Title>
        <Description>
          Advertising is a great way to get your project in front of the right
          people. We&apos;ll help you create a beautiful ad that will appear on
          our website.
        </Description>
        <Form>
          <InputField>
            <Label>Ad URL</Label>
            <Input type="text" placeholder="Enter the ad URL" />
          </InputField>
          <InputField>
            <Label>Ad Image URL</Label>
            <TextArea placeholder="Enter the ad image URL" />
          </InputField>
          <InputField>
            <Label>Daily Budget</Label>
            <Input type="number" placeholder="Enter the daily budget" />
          </InputField>
          <InputField>
            <Label>CPM Configuration</Label>
            <Input type="text" placeholder="Enter CPM configuration" />
          </InputField>
          <InputField>
            <Label>Duration Selection</Label>
            <Input type="text" placeholder="Enter duration selection" />
          </InputField>
          <NextButton onClick={handleNextClick}>Next</NextButton>
        </Form>
      </Content>
    </Container>
  );
};

/** Styled Components */
const Container = styled.div`
  background-color: #0d1117;
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

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 40px 20px;
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

const Form = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const InputField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Label = styled.label`
  font-size: 14px;
  color: #aaa;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #333;
  border-radius: 5px;
  background-color: #161b22;
  color: white;
  font-size: 16px;

  &::placeholder {
    color: #aaa;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #333;
  border-radius: 5px;
  background-color: #161b22;
  color: white;
  font-size: 16px;
  height: 80px;

  &::placeholder {
    color: #aaa;
  }
`;

const NextButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 15px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #0056b3;
  }
`;

export default CreateAd;
