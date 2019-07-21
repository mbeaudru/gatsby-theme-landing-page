import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import { gutterSelector, colorSelector } from '../../utils/themeSelectors';

export default function FolderItem({ label, onClick, items, folderOpen }) {
  return (
    <Li onClick={onClick}>
      <Container>
        <Label>{label}</Label>
        <Icon>{folderOpen ? <FaChevronDown /> : <FaChevronRight />}</Icon>
      </Container>

      {folderOpen && items}
    </Li>
  );
}

FolderItem.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  items: PropTypes.any,
  folderOpen: PropTypes.bool,
};

const Li = styled.li`
  list-style: none;
  cursor: pointer;
  user-select: none;
`;

const Container = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${gutterSelector('sm')} ${gutterSelector('md')};

  &:hover {
    background-color: ${colorSelector('darkerLightPrimary')};
  }
`;

const Label = styled.span``;

const Icon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;
