import Button from 'components/Button';
import Column from 'components/Column';
import Page from 'components/Page';
import Spacer from 'components/Spacer';
import Typography from 'components/Typography';
import Vector from 'components/Vector';
import { FacebookVector, GoogleVector, LogoVector } from 'icons';
import React from 'react';
import styled from 'styled-components';

const TopBlock = styled(Column)`
  background-color: ${({ theme }) => theme.colors.tertiary};
  height: ${window.innerHeight * 0.4}px;
`;

const BORDER_RADIUS = 24;
const BottomBlock = styled(Column)`
  position: absolute;
  padding: 16px;
  bottom: 0;
  border-radius: ${BORDER_RADIUS}px;
  height: ${window.innerHeight * 0.6 + BORDER_RADIUS}px;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Auth: React.FC = () => {
  return (
    <Page>
      <TopBlock justifyContent="center" alignItems="center" fullWidth>
        <Vector width={100} vectorIcon={LogoVector} />
      </TopBlock>
      <BottomBlock alignItems="center">
        <Typography tag="h1" textAlign="center">
          Welcome to Finder!
        </Typography>
        <Spacer height={16} />
        <Typography tag="body" textAlign="center">
          Ensure that your friends and family arrive at their destination
          safely! View their live location while they are on the move.
        </Typography>
        <Spacer height={16} />
        <Button fullWidth vectorIcon={FacebookVector}>
          Continue with Facebook
        </Button>
        <Spacer height={16} />
        <Button fullWidth vectorIcon={GoogleVector}>
          Continue with Google
        </Button>
      </BottomBlock>
    </Page>
  );
};

export default Auth;
