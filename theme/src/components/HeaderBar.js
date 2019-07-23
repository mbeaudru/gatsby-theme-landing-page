import styled from 'styled-components';
import { gutterSelector } from '../utils/themeSelectors';

const HeaderBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${gutterSelector('xs')} ${gutterSelector('md')};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
`;

export default HeaderBar;
