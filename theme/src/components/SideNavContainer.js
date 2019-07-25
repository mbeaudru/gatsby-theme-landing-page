import styled from 'styled-components';
import { colorSelector } from '../utils/themeSelectors';

const SideNavContainer = styled.div`
  width: 280px;
  background-color: ${colorSelector('lightPrimary')};
  color: ${colorSelector('primary')};

  @media (max-width: 800px) {
    margin-left: ${({ visible }) => (visible ? '0' : '-280px')};
  }
`;

export default SideNavContainer;
