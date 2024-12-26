import styled from "styled-components";
import { FC, useEffect, useRef } from "react";
import { Chart, ChartData, ChartOptions } from "chart.js/auto";

/** 샘플 데이터 */
const uptimeData = {
  labels: [
    "Dec 12",
    "Dec 13",
    "Dec 14",
    "Dec 15",
    "Dec 16",
    "Dec 17",
    "Dec 18",
    "Dec 19",
    "Dec 20",
    "Dec 21",
    "Dec 22",
    "Dec 23",
    "Dec 24",
    "Dec 25",
    "Dec 26",
  ],
  datasets: [
    {
      label: "Base Time",
      data: [6, 18, 14, 14, 16, 20, 12, 18, 18, 18, 1, 0, 18, 12, 10],
      backgroundColor: "#198754",
    },
    {
      label: "Bonus Time",
      data: [0, 2, 3, 4, 2, 3, 1, 2, 2, 2, 0, 0, 2, 1, 1],
      backgroundColor: "#ffc107",
    },
    {
      label: "Referral Time",
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: "#dc3545",
    },
  ],
};

const chartOptions: ChartOptions<"bar"> = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    tooltip: {
      callbacks: {
        label: (context) => {
          let label = context.dataset.label || "";
          let value = context.raw || 0;
          return `${label}: ${value}h`;
        },
      },
    },
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
      beginAtZero: true,
    },
  },
};

const MyDashBoard: FC = () => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  let chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy(); // 기존 차트 제거
      }
      chartInstance.current = new Chart(chartRef.current, {
        type: "bar",
        data: uptimeData as ChartData<"bar">,
        options: chartOptions,
      });
    }
    return () => {
      chartInstance.current?.destroy();
    };
  }, []);

  return (
    <Container>
      {/* 헤더 섹션 */}
      <Header>
        <Logo>A² Finance</Logo>
        <Nav>
          <NavLink>Analytics</NavLink>
          <NavLink>Help</NavLink>
          <CreateAdButton>Create Ad</CreateAdButton>
        </Nav>
      </Header>

      {/* 활성 노드 섹션 */}
      <Section>
        <Card>
          <CardHeader>Active Node</CardHeader>
          <StatusBadge active>🟢 Connected</StatusBadge>
          <Details>
            <Detail>
              <Label>Node ID:</Label> 12D3KooW...EVtB
            </Detail>
            <Detail>
              <Label>Connected Host:</Label> head-run.bls.dev
            </Detail>
            <Detail>
              <Label>Today's Time:</Label> 9h 0m
            </Detail>
            <Detail>
              <Label>Total Time:</Label> 23d 5h 30m
            </Detail>
          </Details>
          <Button>View Nodes</Button>
        </Card>

        {/* 총 시간 섹션 */}
        <Card>
          <CardHeader>Total Time</CardHeader>
          <TimeValue>25d 13h 15m</TimeValue>
          <TimeDetails>
            <Detail>
              <Label>Base Time:</Label> 23d 5h 30m
            </Detail>
            <Detail>
              <Label>Bonus Time:</Label> 2d 7h 45m
            </Detail>
            <Detail>
              <Label>Referral Time:</Label> 0h 0m
            </Detail>
          </TimeDetails>
        </Card>
      </Section>

      {/* 업타임 그래프 섹션 */}
      <GraphSection>
        <GraphHeader>Your Uptime</GraphHeader>
        <GraphDescription>
          Your total uptime across all nodes for the last 14 days.
        </GraphDescription>
        <GraphContainer>
          <canvas ref={chartRef}></canvas>
        </GraphContainer>
      </GraphSection>
    </Container>
  );
};

/** Styled Components */
const Container = styled.div`
  background-color: #ffffff;
  color: #0d1117;
  min-height: 100vh;
  padding: 20px;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0d1117;
  padding: 15px 30px;
  color: white;
`;

const Logo = styled.h1`
  font-size: 20px;
  font-weight: bold;
  color: #8b5cf6;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const NavLink = styled.a`
  font-size: 14px;
  color: white;
  cursor: pointer;
`;

const CreateAdButton = styled.button`
  background-color: #8b5cf6;
  color: white;
  border-radius: 5px;
  padding: 8px 16px;
`;

const Section = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 40px;
`;

const Card = styled.div`
  background-color: #f9fafc;
  border-radius: 8px;
  padding: 20px;
  flex: 1;
`;

const CardHeader = styled.h3`
  font-size: 18px;
  font-weight: bold;
`;

const StatusBadge = styled.span<{ active?: boolean }>`
  padding: 5px 10px;
  border-radius: 12px;
  background-color: ${({ active }) => (active ? "#28a745" : "#dc3545")};
  color: white;
`;

const Details = styled.div``;

const Detail = styled.p`
  font-size: 14px;
`;

const Label = styled.span`
  font-weight: bold;
`;

const Button = styled.button`
  background-color: #0d6efd;
  color: white;
`;

const TimeValue = styled.h2`
  color: #28a745;
`;

const TimeDetails = styled.div`
  margin-top: 10px;
`;

const GraphSection = styled.div`
  margin-top: 40px;
`;

const GraphHeader = styled.h3`
  font-size: 20px;
`;

const GraphDescription = styled.p`
  color: #6c757d;
`;

const GraphContainer = styled.div`
  height: 300px;
`;

export default MyDashBoard;
