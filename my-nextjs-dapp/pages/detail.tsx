// DetailPage.tsx
import { useRouter } from "next/router";
import styled from "styled-components";

const DetailPage = () => {
  const router = useRouter();
  const { title, image, description } = router.query;

  if (!title || !image || !description) {
    return <LoadingText>Loading...</LoadingText>;
  }

  return (
      <PageContainer>
        <ContentContainer>
          <CoinImage src={image as string} alt={title as string} />
          <CoinInfo>
            <CoinTitle>{title}</CoinTitle>
            <CoinDescription>{description}</CoinDescription>
          </CoinInfo>
        </ContentContainer>
        <BackButton onClick={() => router.back()}>Back to List</BackButton>
      </PageContainer>
  );
};

export default DetailPage;


// styled-components

const PageContainer = styled.div`
  background-color: #1e1e1e;
  color: #e0e0e0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  width: 100%;
  background-color: #2b2b2b;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
`;

const CoinImage = styled.img`
  max-width: 300px;
  height: auto;
  border-radius: 10px;
  margin-bottom: 20px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const CoinInfo = styled.div`
  text-align: center;
  color: #b3b3b3;
`;

const CoinTitle = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 10px;
  font-weight: bold;
`;

const CoinDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  max-width: 700px;
  margin: 0 auto;
  color: #b3b3b3;
`;

const BackButton = styled.button`
  background-color: #7b44ff;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 12px 24px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 30px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #531fbd;
  }
`;

const LoadingText = styled.div`
  font-size: 1.5rem;
  color: #fff;
  font-weight: bold;
  text-align: center;
  margin-top: 50px;
`;
