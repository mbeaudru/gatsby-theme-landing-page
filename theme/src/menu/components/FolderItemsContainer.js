import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { gutterSelector, fontSizeSelector } from '../../utils/themeSelectors';

export default function FolderItemsContainer({ children, level }) {
  return <Ul level={level}>{children}</Ul>;
}

FolderItemsContainer.propTypes = {
  children: PropTypes.any,
  level: PropTypes.number,
};

const Ul = styled.ul`
  padding: 0 0 0
    ${({ level, theme }) => (level ? gutterSelector('sm')({ theme }) : 0)};
  margin: 0;

  font-size: ${fontSizeSelector('md2')};
`;
