import React from 'react';
import PropTypes from 'prop-types';

export default function TreeLeaf({ items, path = '/', activePaths, onToggle }) {
  function isActive(itemPath) {
    return !!activePaths.find(activePath => {
      return activePath.includes(itemPath);
    });
  }

  function onItemClick(e, item) {
    e.stopPropagation();
    onToggle(item);
  }

  return (
    <ul>
      {items.map(node => {
        const item = {
          path: path + node.name + '/',
          isDir: !!node.items,
        };
        return (
          <li key={node.name} onClick={e => onItemClick(e, item)}>
            {node.name}
            {node.items && isActive(item.path) && (
              <TreeLeaf
                items={node.items}
                path={item.path}
                onToggle={onToggle}
                activePaths={activePaths}
              />
            )}
          </li>
        );
      })}
    </ul>
  );
}

TreeLeaf.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      items: PropTypes.array,
    })
  ),
  path: PropTypes.string,
  activePaths: PropTypes.arrayOf(PropTypes.string).isRequired,
  onToggle: PropTypes.func.isRequired,
};
