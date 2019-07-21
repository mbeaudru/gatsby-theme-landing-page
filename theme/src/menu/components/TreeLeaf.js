import React from 'react';
import PropTypes from 'prop-types';
import FolderItem from './FolderItem';
import FileItem from './FileItem';
import FolderItemsContainer from './FolderItemsContainer';

export default function TreeLeaf({
  items,
  path = '/',
  activePaths,
  onToggle,
  level = 0,
}) {
  function isActive(itemPath) {
    return activePaths[itemPath];
  }

  function onItemClick(e, item) {
    e.stopPropagation();
    onToggle(item);
  }

  return (
    <FolderItemsContainer level={level}>
      {items.map(node => {
        const item = {
          path: path + node.name + '/',
          isDir: !!node.items,
        };

        const FolderOrFileComponent = node.isFile ? FileItem : FolderItem;

        return (
          <FolderOrFileComponent
            key={node.name}
            onClick={e => onItemClick(e, item)}
            label={node.name}
            items={
              node.items && (
                <TreeLeaf
                  items={node.items}
                  path={item.path}
                  onToggle={onToggle}
                  activePaths={activePaths}
                  level={level + 1}
                />
              )
            }
            active={isActive(item.path)}
            node={node}
          />
        );
      })}
    </FolderItemsContainer>
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
  activePaths: PropTypes.object.isRequired,
  onToggle: PropTypes.func.isRequired,
  level: PropTypes.number,
};
