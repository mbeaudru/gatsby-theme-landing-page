import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import { gutterSelector } from '../../utils/themeSelectors';

export default function FolderItem({ label, onClick, items, active }) {
  return (
    <Li onClick={onClick}>
      <Container>
        <Label>{label}</Label>
        <Icon>{active ? <FaChevronDown /> : <FaChevronRight />}</Icon>
      </Container>

      {active && items}
    </Li>
  );
}

FolderItem.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  items: PropTypes.any,
  active: PropTypes.bool,
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
    background-color: #562882;
  }
`;

const Label = styled.span``;

const Icon = styled.span``;
