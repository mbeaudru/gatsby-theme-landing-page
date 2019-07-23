import styled from 'styled-components';
import { colorSelector } from '../utils/themeSelectors';

const SideNavContainer = styled.div`
  width: 280px;
  background-color: ${colorSelector('lightPrimary')};
  color: ${colorSelector('primary')};
`;

export default SideNavContainer;
