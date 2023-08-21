import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin: 0 auto;
`;
export const Avatar = styled.img`
  width: 150px;
  border-radius: 50%;
`;
export const StatsList = styled.ul`
  display: flex;
  gap: 16px;
`;
export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 100px;
  background-color: #eebedf;
`;
