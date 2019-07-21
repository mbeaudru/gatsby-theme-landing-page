import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  gutterSelector,
  fontFamilySecondarySelector,
  colorSelector,
} from '../../utils/themeSelectors';

export default function FileItem({ label, active, onClick }) {
  return (
    <Li onClick={onClick} active={active}>
      {label}
    </Li>
  );
}

FileItem.propTypes = {
  label: PropTypes.string,
  active: PropTypes.bool,
  onClick: PropTypes.func,
};

const Li = styled.li`
  list-style: none;
  cursor: pointer;
  user-select: none;

  padding: ${gutterSelector('sm')} ${gutterSelector('md')};
  font-family: ${fontFamilySecondarySelector};

  &:hover {
    background-color: ${colorSelector('darkerLightPrimary')};
  }
`;
