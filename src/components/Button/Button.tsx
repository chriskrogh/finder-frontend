import Typography from 'components/Typography';
import Vector, { VectorIcon } from 'components/Vector';
import React from 'react';
import styled, { useTheme } from 'styled-components';

type ContainerProps = {
  fullWidth?: boolean;
};
const Container = styled.button<ContainerProps>`
  display: 'flex';
  flex-direction: 'column';
  justify-content: 'center';
  align-items: 'center';
  border: none;
  padding: 8px;
  min-height: 48px;
  background-color: ${({ theme }) => theme.colors.text};
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'initial')};
`;

type Props = ContainerProps & {
  vectorIcon?: VectorIcon;
};

const Button: React.FC<Props> = ({ fullWidth, vectorIcon, children }) => {
  const theme = useTheme();

  return (
    <Container fullWidth={fullWidth}>
      {vectorIcon && <Vector height={20} vectorIcon={vectorIcon} />}
      <Typography tag="body" color={theme.colors.background}>
        {children}
      </Typography>
    </Container>
  );
};

export default Button;
