import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import theme from '../theme';
import {
  gutterSelector,
  fontFamilySelector,
  fontGlobalSizeSelector,
  fontSizeSelector,
} from '../utils/themeSelectors';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    font-size: ${fontGlobalSizeSelector('md')}
  }

  body {
    margin: 0;
    font-family: ${fontFamilySelector}
  }

  #___gatsby {
    height: 100%;
  }
  
  #___gatsby > * {
    height: 100%;
  }
`;

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Body>
        <Header>
          <HeaderTitle>Potato</HeaderTitle>
        </Header>
        <Main>
          <Container>{children}</Container>
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

const HeaderTitle = styled.span`
  font-size: ${fontSizeSelector('lg')};
`;

const Main = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.primary};
`;

const Container = styled.div``;

export default Layout;
