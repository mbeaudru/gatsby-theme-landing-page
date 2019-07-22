import { createGlobalStyle } from 'styled-components';

const colors = {
  primary: '#663399',
  veryDarkPrimary: '#1a0b29',
  lightPrimary: '#f8f1ff',
  darkerLightPrimary: '#ecd9ff',
  background: 'white',
  normal: 'black',
};

const theme = {
  colors,
  font: {
    family: `'Roboto', sans-serif`,
    globalSize: {
      md: '16px',
    },
    size: {
      md: '1rem',
      md2: '1.1rem',
      lg: '1.5rem',
      xl: '1.7rem',
    },
  },
  gutter: {
    xs: '5px',
    sm: '10px',
    md: '20px',
    lg: '40px',
  },
};

export default theme;

export const GlobalStyle = createGlobalStyle`
html,
body {
  height: 100%;
  font-size: ${theme.font.globalSize.md}
}

body {
  margin: 0;
  font-family: ${theme.font.family}
}

#___gatsby {
  height: 100%;
}

#___gatsby > * {
  height: 100%;
}
`;
