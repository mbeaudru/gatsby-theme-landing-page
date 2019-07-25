import React from 'react';
import PropTypes from 'prop-types';
import TreeMenu from './TreeMenu';
import SideNavContainer from '../../components/SideNavContainer';

export default function SideNav({ visible }) {
  return (
    <SideNavContainer visible={visible}>
      <TreeMenu />
    </SideNavContainer>
  );
}

SideNav.propTypes = {
  visible: PropTypes.bool,
};
