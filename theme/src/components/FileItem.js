import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { gutterSelector, colorSelector } from '../utils/themeSelectors';
import NavigationLink from './NavigationLink';

export default function FileItem({
  label,
  onClick,
  node,
  activePaths,
  fileActive,
}) {
  return (
    <Li onClick={onClick} active={fileActive}>
      <StyledLink to={node.fields.slug} state={{ activePaths }}>
        {label}
      </StyledLink>
    </Li>
  );
}

FileItem.propTypes = {
  label: PropTypes.string,
  fileActive: PropTypes.bool,
  onClick: PropTypes.func,
  node: PropTypes.shape({
    fields: PropTypes.shape({
      slug: PropTypes.string,
    }),
  }),
  activePaths: PropTypes.object,
};

const Li = styled.li`
  list-style: none;
  cursor: pointer;
  user-select: none;
  display: flex;

  ${({ active, ...props }) =>
    active &&
    `
  border-right: 4px solid ${colorSelector('primary')(props)};
  `}
`;

const StyledLink = styled(NavigationLink)`
  display: block;
  flex: 1;
  color: inherit;
  text-decoration: none;

  padding: ${gutterSelector('sm')} ${gutterSelector('md')};
  &:hover {
    background-color: ${colorSelector('darkerLightPrimary')};
  }
`;
