import styled from 'styled-components';
import { Link } from 'gatsby';
import { selectors } from 'gatsby-theme-plume';

const HeaderTitle = styled(Link)`
  font-size: ${selectors.fontSizeSelector('lg')};
  color: inherit;
  text-decoration: none;
  text-decoration: none;
  font-weight: bold;
  font-family: ${selectors.fontFamilySelector};
  margin: ${selectors.gutterSelector('xs')} 0;

  &:hover {
    color: inherit;
  }
`;

export default HeaderTitle;
