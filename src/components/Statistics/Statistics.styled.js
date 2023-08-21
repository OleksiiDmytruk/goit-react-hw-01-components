import styled from 'styled-components';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const StatsList = styled.ul`
  display: flex;
  gap: 16px;
`;
export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 50px;
  background-color: ${getRandomHexColor};
`;
