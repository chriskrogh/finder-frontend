import Button from 'components/Button';
import Column from 'components/Column';
import Page from 'components/Page';
import Spacer from 'components/Spacer';
import TextField from 'components/TextField';
import Typography from 'components/Typography';
import React from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { ROUTES } from 'utils/routes';

const RAIL_SPACING = 16;
const Container = styled(Column)`
  padding: 0 ${RAIL_SPACING}px;
  width: calc(100% - ${2 * RAIL_SPACING}px);
`;

const SignUp: React.FC = () => {
  const history = useHistory();

  const handleContinue = () => history.push(ROUTES.HOME);

  return (
    <Page>
      <Container>
        <Spacer height={64} />
        <Column alignItems="center">
          <Typography tag="h1" textAlign="center">
            Getting Started
          </Typography>
          <Spacer height={16} />
          <Typography tag="body" textAlign="center">
            We just need some extra info from you before we create your account
          </Typography>
        </Column>
        <Spacer height={16} />
        <Typography tag="h2">Username</Typography>
        <Spacer height={4} />
        <TextField type="text" />
        <Spacer height={16} />
        <Typography tag="h2">Phone number</Typography>
        <Spacer height={4} />
        <TextField type="number" />
        <Spacer height={24} />
        <Button fullWidth onClick={handleContinue}>
          Let's Go!
        </Button>
      </Container>
    </Page>
  );
};

export default SignUp;
