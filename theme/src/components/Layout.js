import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { Link } from 'gatsby';
import theme, { GlobalStyle } from '../theme';
import { gutterSelector, fontSizeSelector } from '../utils/themeSelectors';
import SideNav from '../menu/components/SideNav';

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Body>
        <Header>
          <HeaderTitle to="/">Plume</HeaderTitle>
        </Header>
        <Main>
          <SideNav />
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
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
`;

const HeaderTitle = styled(Link)`
  font-size: ${fontSizeSelector('lg')};
  color: inherit;
  text-decoration: none;
`;

const Main = styled.div`
  flex: 1;
  display: flex;
`;
const ContentBody = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.primary};
  padding: ${gutterSelector('md')};
  padding-bottom: ${gutterSelector('lg')};

  > :first-child {
    margin-top: 0;
  }
`;

export default Layout;
