import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import { fontSizeSelector, gutterSelector } from '../utils/themeSelectors';

const BurgerIcon = styled(FaBars)`
  font-size: ${fontSizeSelector('lg')};
  margin-right: ${gutterSelector('md')};

  display: none;
  @media (max-width: 800px) {
    display: inline-block;
  }
`;

export default BurgerIcon;
