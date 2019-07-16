import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import theme, { GlobalStyle } from '../theme';
import { gutterSelector, fontSizeSelector } from '../utils/themeSelectors';

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Body>
        <Header>
          <HeaderTitle>Plume</HeaderTitle>
        </Header>
        <Main>
          <SideMenu>Sidemenu</SideMenu>
          <ContentBody>{children}</ContentBody>
        </Main>

        <GlobalStyle />
      </Body>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.any,
};

const Body = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${gutterSelector('xs')} ${gutterSelector('md')};
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.background};
`;

const HeaderTitle = styled.span`
  font-size: ${fontSizeSelector('lg')};
`;

const Main = styled.div`
  flex: 1;
  display: flex;
`;

const SideMenu = styled.div`
  width: 280px;
  padding: ${gutterSelector('md')};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
`;
const ContentBody = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.primary};
  padding: ${gutterSelector('md')};
`;

export default Layout;
