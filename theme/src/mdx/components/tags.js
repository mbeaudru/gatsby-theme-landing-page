import styled from 'styled-components';
import { colorSelector, gutterSelector } from '../../utils/themeSelectors';

// eslint-disable-next-line
export const h1 = styled.h1`
  margin: 0;
  padding-bottom: ${gutterSelector('sm')};

  border-bottom: 1px solid ${colorSelector('darkerLightPrimary')};
`;
