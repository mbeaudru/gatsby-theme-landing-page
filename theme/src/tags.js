import styled from 'styled-components';
import {
  colorSelector,
  gutterSelector,
  fontFamilySelector,
} from './utils/themeSelectors';

// eslint-disable-next-line
export const h1 = styled.h1`
  padding-bottom: ${gutterSelector('xs')};
  border-bottom: 1px solid ${colorSelector('darkerLightPrimary')};
  font-size: 3rem;
  display: inline-block;
  padding-right: ${gutterSelector('lg')};
`;

export const h2 = styled.h2`
  font-size: 2.2rem;
`;

export const h3 = styled.h3`
  font-size: 1.4rem;
`;

export const h4 = styled.h4`
  font-size: 1.1rem;
`;

export const h5 = styled.h5`
  font-size: 0.8rem;
`;

export const h6 = styled.h6`
  font-size: 0.6rem;
`;

export const p = styled.p`
  color: ${colorSelector('normal')};
`;

export const blockquote = styled.blockquote`
  margin-left: 0;
  padding: ${gutterSelector('sm')} ${gutterSelector('md')};
  border-left: 4px solid ${colorSelector('primary')};
  background-color: ${colorSelector('lightPrimary')};

  > :first-child {
    margin-top: 0;
  }

  > :last-child {
    margin-bottom: 0;
  }
`;

export const ul = styled.ul`
  padding-left: ${gutterSelector('md')};
  list-style: disc outside;
  margin-bottom: ${gutterSelector('sm')};
  color: ${colorSelector('normal')};
`;

export const li = styled.li`
  padding: 2px 0;
  color: ${colorSelector('normal')};

  ul:first-child {
    margin-top: 5px;
    margin-bottom: 0px;
  }
`;

export const table = styled.table`
  th {
    font-weight: bold;
    padding: ${gutterSelector('xs')} ${gutterSelector('md')};
    text-align: center;
  }

  td {
    padding: ${gutterSelector('xs')} ${gutterSelector('md')};
    text-align: center;
    color: ${colorSelector('normal')};
  }

  thead tr {
    background-color: ${colorSelector('lightPrimary')};
  }

  tbody tr td {
    border-bottom: 1px solid ${colorSelector('darkerLightPrimary')};
  }
`;

export const pre = styled.pre`
  background-color: ${colorSelector('lightPrimary')};
  color: ${colorSelector('normal')};
  padding: ${gutterSelector('sm')};
  font-family: ${fontFamilySelector};
`;

export const code = styled.code`
  background-color: ${colorSelector('lightPrimary')};
  color: ${colorSelector('normal')};
  font-family: ${fontFamilySelector};
  padding: 0 ${gutterSelector('xs')};
`;

export const inlineCode = code;
