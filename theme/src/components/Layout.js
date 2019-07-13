import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import theme from '../theme';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: ${theme.fontFamily}
  }
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyle />
        <Header>
          <span>{data.site.siteMetadata.title}</span>
        </Header>
        <Main>
          <Container>{children}</Container>
        </Main>
      </div>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.any,
};

const Header = styled.div``;
const Main = styled.div``;
const Container = styled.div``;

export default Layout;
