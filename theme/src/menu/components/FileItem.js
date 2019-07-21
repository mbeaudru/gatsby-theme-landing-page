import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';
import {
  gutterSelector,
  fontFamilySecondarySelector,
  colorSelector,
} from '../../utils/themeSelectors';

export default function FileItem({ label, active, onClick, node }) {
  return (
    <Li onClick={onClick} active={active}>
      <StyledLink to={node.fields.slug}>{label}</StyledLink>
    </Li>
  );
}

FileItem.propTypes = {
  label: PropTypes.string,
  active: PropTypes.bool,
  onClick: PropTypes.func,
  node: PropTypes.shape({
    fields: PropTypes.shape({
      slug: PropTypes.string,
    }),
  }),
};

const Li = styled.li`
  list-style: none;
  cursor: pointer;
  user-select: none;
  font-family: ${fontFamilySecondarySelector};
  display: flex;
`;

const StyledLink = styled(Link)`
  display: block;
  flex: 1;
  color: inherit;
  text-decoration: none;

  padding: ${gutterSelector('sm')} ${gutterSelector('md')};
  &:hover {
    background-color: ${colorSelector('darkerLightPrimary')};
  }
`;
