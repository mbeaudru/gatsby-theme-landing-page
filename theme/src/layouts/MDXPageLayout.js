import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import themeConfig, { GlobalStyle } from '../themeConfig';
import SideNav from '../menu/components/SideNav';
import HeaderBar from '../components/HeaderBar';
import HeaderTitle from '../components/HeaderTitle';
import LayoutContainer from '../components/LayoutContainer';
import ContentBody from '../components/ContentBody';
import MDXPageLayoutBody from '../components/MDXPageLayoutBody';
import BurgerIcon from '../components/BurgerIcon';
import HeaderBarLeft from '../components/HeaderBarLeft';

const MDXPageLayout = ({ children }) => {
  const [burgerOn, toggleBurger] = useState(false);
  return (
    <ThemeProvider theme={themeConfig.styled}>
      <MDXPageLayoutBody>
        <HeaderBar>
          <HeaderBarLeft>
            <BurgerIcon onClick={() => toggleBurger(!burgerOn)} />
            <HeaderTitle to="/docs">{themeConfig.meta.siteName}</HeaderTitle>
          </HeaderBarLeft>
        </HeaderBar>
        <LayoutContainer>
          <SideNav visible={burgerOn} />
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
