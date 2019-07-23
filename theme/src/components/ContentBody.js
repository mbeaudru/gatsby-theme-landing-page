import styled from 'styled-components';
import { gutterSelector } from '../utils/themeSelectors';

const ContentBody = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.primary};
  padding: ${gutterSelector('md')} ${gutterSelector('lg')};
  padding-bottom: ${gutterSelector('lg')};
`;

export default ContentBody;
