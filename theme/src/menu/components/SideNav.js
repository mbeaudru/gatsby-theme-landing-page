import React from 'react';
import styled from 'styled-components';
import TreeMenu from './TreeMenu';

export default function SideNav() {
  return (
    <Container>
      <TreeMenu />
    </Container>
  );
}

const Container = styled.div`
  width: 280px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
`;
