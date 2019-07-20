const themeSelector = ({ theme }) => theme;

export default themeSelector;

export const gutterSelector = size => props =>
  themeSelector(props).gutter[size];

export const fontSelector = props => themeSelector(props).font;

export const fontFamilySelector = () => props => fontSelector(props).family;
export const fontFamilySecondarySelector = () => props =>
  fontSelector(props).familySecondary;

export const fontGlobalSizeSelector = size => props =>
  fontSelector(props).globalSize[size];

export const fontSizeSelector = size => props => fontSelector(props).size[size];
