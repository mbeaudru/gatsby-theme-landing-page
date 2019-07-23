import styled from 'styled-components';
import NavigationLink from '../../../../theme/src/components/NavigationLink';
import {
  fontSizeSelector,
  fontFamilySelector,
  gutterSelector,
} from '../../../../theme/src/utils/themeSelectors';

const HeaderTitle = styled(NavigationLink)`
  font-size: ${fontSizeSelector('lg')};
  color: inherit;
  text-decoration: none;
  font-weight: bold;
  font-family: ${fontFamilySelector};
  margin: ${gutterSelector('xs')} 0;
`;

export default HeaderTitle;
