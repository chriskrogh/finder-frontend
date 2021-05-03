import Spacer from 'components/Spacer';
import Typography from 'components/Typography';
import Vector, { VectorIcon } from 'components/Vector';
import React, { ButtonHTMLAttributes } from 'react';
import styled, { useTheme } from 'styled-components';

type ContainerProps = {
  fullWidth?: boolean;
};
const Container = styled.button<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 8px;
  min-height: 48px;
  background-color: ${({ theme }) => theme.colors.text};
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'initial')};
`;

type Props = ContainerProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    vectorIcon?: VectorIcon;
  };

const Button: React.FC<Props> = ({
  fullWidth,
  vectorIcon,
  children,
  ...props
}) => {
  const theme = useTheme();

  return (
    <Container fullWidth={fullWidth} {...props}>
      {vectorIcon && (
        <>
          <Vector height={20} vectorIcon={vectorIcon} />
          <Spacer width={16} />
        </>
      )}
      <Typography tag="body" color={theme.colors.background}>
        {children}
      </Typography>
    </Container>
  );
};

export default Button;
