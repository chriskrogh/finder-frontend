import Row from 'components/Row';
import Spacer from 'components/Spacer';
import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import styled from 'styled-components';

enum MENU_HEIGHT {
  COLLAPSED = 105,
  DEFAULT = 300,
  EXPANDED = window.innerHeight - 72,
}

const BORDER_RADIUS = 24;
const Container = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  transition: height 0.3s ease;
  border-top-left-radius: ${BORDER_RADIUS}px;
  border-top-right-radius: ${BORDER_RADIUS}px;
`;

const BAR_HEIGHT = 10;
const Bar = styled.div`
  height: ${BAR_HEIGHT}px;
  width: 92px;
  border-radius: ${BAR_HEIGHT / 2}px;
  background-color: ${({ theme }) => theme.colors.overlay};
`;

const Menu: React.FC = ({ children }) => {
  const [menuHeight, setMenuHeight] = useState(MENU_HEIGHT.DEFAULT);

  const handlers = useSwipeable({
    onSwipedUp: () => {
      if (menuHeight === MENU_HEIGHT.COLLAPSED) {
        setMenuHeight(MENU_HEIGHT.DEFAULT);
      } else if (menuHeight === MENU_HEIGHT.DEFAULT) {
        setMenuHeight(MENU_HEIGHT.EXPANDED);
      }
    },
    onSwipedDown: () => {
      if (menuHeight === MENU_HEIGHT.EXPANDED) {
        setMenuHeight(MENU_HEIGHT.DEFAULT);
      } else if (menuHeight === MENU_HEIGHT.DEFAULT) {
        setMenuHeight(MENU_HEIGHT.COLLAPSED);
      }
    },
  });

  return (
    <Container {...handlers} style={{ height: menuHeight }}>
      <Spacer height={16} />
      <Row justifyContent="center" fullWidth>
        <Bar />
      </Row>
      <Spacer height={16} />
      {children}
    </Container>
  );
};

export default Menu;
