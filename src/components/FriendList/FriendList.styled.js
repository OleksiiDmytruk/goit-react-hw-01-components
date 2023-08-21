import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
`;
export const FreindItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background-color: #d6eeee;
  gap: 12px;
`;
export const OnlineMark = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => (props.isonline ? 'green' : 'red')};
`;
