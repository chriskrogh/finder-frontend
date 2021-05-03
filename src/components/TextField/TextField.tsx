import { IonIcon } from '@ionic/react';
import Row from 'components/Row';
import Spacer from 'components/Spacer';
import { search as searchIcon } from 'ionicons/icons';
import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

const PADDING = 8;
const Container = styled(Row)`
  background: ${({ theme }) => theme.colors.overlay};
  padding: 0 ${PADDING}px;
  width: calc(100% - ${2 * PADDING}px);
  min-height: 48px;
  outline: none;
`;

const Input = styled.input`
  font-family: ${({ theme }) => theme.typography['body'].fontFamily};
  font-size: ${({ theme }) => theme.typography['body'].fontSize}px;
  font-weight: ${({ theme }) => theme.typography['body'].fontWeight};
  line-height: ${({ theme }) => theme.typography['body'].lineHeight}px;
  letter-spacing: ${({ theme }) => theme.typography['body'].letterSpacing}px;

  color: ${({ theme }) => theme.colors.text};

  border: none;
  outline: none;
  background: none;
  width: 100%;

  ::placeholder {
    color: ${({ theme }) => theme.colors.subtext};
  }

  :-webkit-autofill {
    -webkit-text-fill-color: black;
  }

  :-webkit-autofill:focus {
    -webkit-text-fill-color: black;
  }
`;

export type Props = InputHTMLAttributes<HTMLInputElement> & {
  search?: boolean;
};

const TextField: React.FC<Props> = ({ search, ...props }) => {
  return (
    <Container alignItems="center">
      {search && (
        <>
          <IonIcon icon={searchIcon} size="medium" />
          <Spacer width={4} />
        </>
      )}
      <Input {...props} />
    </Container>
  );
};

export default TextField;
