import styled from 'styled-components';

const Page = styled.div`
  position: relative;
  width: 100vw;
  height: ${window.innerHeight}px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export default Page;
