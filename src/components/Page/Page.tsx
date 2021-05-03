import styled from 'styled-components';

const Page = styled.div`
  width: 100vw;
  height: ${window.innerHeight}px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export default Page;
