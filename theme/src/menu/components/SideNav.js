import React from 'react';
import styled from 'styled-components';
import TreeMenu from './TreeMenu';
import { colorSelector } from '../../utils/themeSelectors';

export default function SideNav() {
  return (
    <Container>
      <TreeMenu />
    </Container>
  );
}

const Container = styled.div`
  width: 280px;
  background-color: ${colorSelector('lightPrimary')};
  color: ${colorSelector('primary')};
`;
