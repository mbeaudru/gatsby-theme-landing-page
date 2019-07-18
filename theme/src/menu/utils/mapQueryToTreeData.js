import _get from 'lodash/get';
import _set from 'lodash/set';
import _take from 'lodash/take';
import _memoize from 'lodash/memoize';

const mapQueryToTreeData = _memoize(queryResult => {
  const treeBeardData = {
    name: 'root',
    items: [],
  };
  const files = _get(queryResult, 'allFile.edges');

  files.forEach(file => {
    const filePath = _get(file, 'node.relativePath').split('/');

    if (filePath.length === 1) {
      _set(treeBeardData, ['items', '0'], { name: filePath[0] });
      return;
    } else {
      const directories = _take(filePath, filePath.length - 1);
      const fileName = filePath[filePath.length - 1];

      const item = { name: fileName };
      const nextItems = mapDirectoriesToItems({
        directories,
        item,
        items: treeBeardData.items,
      });

      treeBeardData.items = nextItems;
    }
  });

  return treeBeardData;
});

export default mapQueryToTreeData;

function mapDirectoriesToItems({ directories, item, items }) {
  const nextItems = [...items];
  const [currentDirectory, ...remainingDirectories] = directories;

  let exists = false;
  nextItems.forEach(child => {
    if (child.name === currentDirectory) {
      exists = true;
      child.items = mapDirectoriesToItems({
        directories: remainingDirectories,
        item,
        items: child.items,
      });
    }
  });

  if (!exists) {
    nextItems.push({
      name: currentDirectory,
      items: [],
    });
  }

  if (directories.length === 1) {
    nextItems.forEach(child => {
      if (child.name === currentDirectory) {
        child.items.push(item);
      }
    });
  }

  return nextItems;
}
