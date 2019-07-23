import styled from 'styled-components';
import { fontSizeSelector } from '../utils/themeSelectors';
import NavigationLink from './NavigationLink';

const HeaderTitle = styled(NavigationLink)`
  font-size: ${fontSizeSelector('lg')};
  color: inherit;
  text-decoration: none;
`;

export default HeaderTitle;
