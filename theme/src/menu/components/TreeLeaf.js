import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import slugify from 'slugify';
import _get from 'lodash/get';
import FolderItem from './FolderItem';
import FileItem from './FileItem';
import FolderItemsContainer from './FolderItemsContainer';
import LocationContext from '../../contexts/LocationContext';

export default function TreeLeaf({
  items,
  path = '/',
  activePaths,
  onToggle,
  level = 0,
}) {
  const location = useContext(LocationContext);

  function isFolderOpen(itemPath) {
    return activePaths[itemPath];
  }

  function isFileActive(itemPath) {
    return itemPath === _get(location, 'pathname');
  }

  function onItemClick(e, item) {
    e.stopPropagation();
    onToggle(item);
  }

  return (
    <FolderItemsContainer level={level}>
      {items.map(node => {
        const item = {
          ...node,
          path: path + slugify(node.name.toLowerCase()) + '/',
          isDir: !!node.items,
        };

        if (!item.name) return null;

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
            folderOpen={isFolderOpen(item.path)}
            fileActive={isFileActive(item.path)}
            node={node}
            activePaths={activePaths}
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
