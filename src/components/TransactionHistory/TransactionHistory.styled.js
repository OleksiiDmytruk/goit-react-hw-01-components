import styled from 'styled-components';

export const Table = styled.table`
  width: 600px;
  font-size: 18px;
  border: 1px solid #282a35;
`;
export const Head = styled.thead`
  background-color: blue;
`;
export const Body = styled.tbody`
  tr:nth-child(even) {
    background-color: #d6eeee;
  }
`;
