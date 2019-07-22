import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ children, bsStyle = 'primary' }) {
  return (
    <button
      style={{
        borderRadius: 3,
        border: '1px solid transparent',
        padding: '5px 10px',
        backgroundColor: mapBsStyleToColor(bsStyle),
        color: 'white',
        fontWeight: 'bold',
      }}
    >
      {children}
    </button>
  );
}

function mapBsStyleToColor(bsStyle) {
  switch (bsStyle) {
    case 'primary': {
      return '#663399';
    }
    case 'danger': {
      return '#E91E63';
    }
    case 'warning': {
      return '#ff9800';
    }
    case 'info': {
      return '#03a9f4';
    }
    default: {
      return '#663399';
    }
  }
}

Button.propTypes = {
  children: PropTypes.any,
  bsStyle: PropTypes.string,
};
