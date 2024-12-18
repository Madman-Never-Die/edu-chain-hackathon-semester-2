import styled from "styled-components";
import { FC } from "react";
import Image from "next/image";

const Dashboard: FC = () => {
  return (
    <Container>
      <Navbar>
        <Logo>EduAds</Logo>
        <NavLinks>
          <NavLink>Campaigns</NavLink>
          <NavLink>Creative</NavLink>
          <NavLink>Audiences</NavLink>
          <NavLink>Analytics</NavLink>
          <ProfileIcon>
            <Image src="/profile-icon.png" alt="Profile" />
          </ProfileIcon>
        </NavLinks>
      </Navbar>
      <Content>
        <Header>
          <Title>Dashboard</Title>
          <Description>
            Welcome to your EduAds dashboard. Here you can create and manage
            campaigns, view analytics, and more.
          </Description>
          <CreateCampaignButton>Create a campaign</CreateCampaignButton>
        </Header>

        <Statistics>
          <StatBox>
            <Label>Total Staked EDU</Label>
            <Value>$15,000</Value>
          </StatBox>
          <StatBox>
            <Label>Distributed EDU</Label>
            <Value>$1,500</Value>
          </StatBox>
          <StatBox>
            <Label>Connected Wallets</Label>
            <Value>10</Value>
          </StatBox>
        </Statistics>

        <Charts>
          <Chart>
            <ChartTitle>Daily Users</ChartTitle>
            <PlaceholderChart />
          </Chart>
          <Chart>
            <ChartTitle>Daily Spend</ChartTitle>
            <PlaceholderChart />
          </Chart>
        </Charts>

        <Campaigns>
          <CampaignsHeader>Campaigns</CampaignsHeader>
          <Table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Budget</th>
                <th>Status</th>
                <th>Impressions</th>
                <th>Spend</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>New Year, New You</td>
                <td>$500</td>
                <td>
                  <Status active>Active</Status>
                </td>
                <td>100,000</td>
                <td>$200</td>
              </tr>
              <tr>
                <td>EduAds Launch</td>
                <td>$1,000</td>
                <td>
                  <Status active>Active</Status>
                </td>
                <td>500,000</td>
                <td>$800</td>
              </tr>
              <tr>
                <td>Back to School</td>
                <td>$250</td>
                <td>
                  <Status>Paused</Status>
                </td>
                <td>50,000</td>
                <td>$100</td>
              </tr>
              <tr>
                <td>Winter Sale</td>
                <td>$750</td>
                <td>
                  <Status active>Active</Status>
                </td>
                <td>200,000</td>
                <td>$400</td>
              </tr>
              <tr>
                <td>Halloween Special</td>
                <td>$300</td>
                <td>
                  <Status>Paused</Status>
                </td>
                <td>75,000</td>
                <td>$150</td>
              </tr>
            </tbody>
          </Table>
        </Campaigns>
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

const ProfileIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;

  Image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Content = styled.div`
  padding: 40px 20px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 40px;
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 16px;
  color: #aaa;
  margin-bottom: 20px;
`;

const CreateCampaignButton = styled.button`
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

const Statistics = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
`;

const StatBox = styled.div`
  background-color: #161b22;
  padding: 20px;
  border-radius: 10px;
  flex: 1;
  text-align: center;
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

const Charts = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
`;

const Chart = styled.div`
  background-color: #161b22;
  padding: 20px;
  border-radius: 10px;
  flex: 1;
  text-align: center;
`;

const ChartTitle = styled.p`
  font-size: 14px;
  color: #aaa;
  margin-bottom: 10px;
`;

const PlaceholderChart = styled.div`
  width: 100%;
  height: 150px;
  background-color: #21262d;
  border-radius: 5px;
`;

const Campaigns = styled.div`
  margin-top: 40px;
`;

const CampaignsHeader = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  thead {
    background-color: #161b22;
    color: #aaa;
  }

  th,
  td {
    padding: 10px;
    text-align: left;
  }

  tbody tr:nth-child(even) {
    background-color: #21262d;
  }

  tbody tr:hover {
    background-color: #30363d;
  }
`;

const Status = styled.span<{ active?: boolean }>`
  display: inline-block;
  padding: 5px 10px;
  border-radius: 15px;
  background-color: ${({ active }) => (active ? "#007bff" : "#555")};
  color: white;
  font-size: 14px;
  text-align: center;
`;

export default Dashboard;
