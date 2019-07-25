import styled from 'styled-components';
import colors from '../colors';

const SideNavContainer = styled.div`
  width: 280px;
  background-color: ${() => colors.dark};
  color: ${() => colors.background};

  @media (max-width: 800px) {
    margin-left: ${({ visible }) => (visible ? '0' : '-280px')};
  }
`;

export default SideNavContainer;
