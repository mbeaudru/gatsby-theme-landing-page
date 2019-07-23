import { createGlobalStyle } from 'styled-components';
import colors from './colors';
import meta from './meta';

const styledTheme = {
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

const config = {
  meta,
  styled: styledTheme,
};

export default config;

export const GlobalStyle = createGlobalStyle`
html,
body {
  height: 100%;
  font-size: ${styledTheme.font.globalSize.md}
}

body {
  margin: 0;
  font-family: ${styledTheme.font.family}
}

#___gatsby {
  height: 100%;
}

#___gatsby > * {
  height: 100%;
}
`;
