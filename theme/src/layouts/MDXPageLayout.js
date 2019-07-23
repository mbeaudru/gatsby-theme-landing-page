import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import themeConfig, { GlobalStyle } from '../themeConfig';
import SideNav from '../menu/components/SideNav';
import HeaderBar from '../components/HeaderBar';
import HeaderTitle from '../components/HeaderTitle';
import LayoutContainer from '../components/LayoutContainer';
import ContentBody from '../components/ContentBody';
import MDXPageLayoutBody from '../components/MDXPageLayoutBody';

const MDXPageLayout = ({ children }) => {
  return (
    <ThemeProvider theme={themeConfig.styled}>
      <MDXPageLayoutBody>
        <HeaderBar>
          <HeaderTitle to="/">{themeConfig.meta.siteName}</HeaderTitle>
        </HeaderBar>
        <LayoutContainer>
          <SideNav />
          <ContentBody>{children}</ContentBody>
        </LayoutContainer>

        <GlobalStyle />
      </MDXPageLayoutBody>
    </ThemeProvider>
  );
};

MDXPageLayout.propTypes = {
  children: PropTypes.any,
};

export default MDXPageLayout;
