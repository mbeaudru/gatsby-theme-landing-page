import _get from 'lodash/get';
import _memoize from 'lodash/memoize';

const mapQueryToTreeData = _memoize(queryResult => {
  const treeBeardData = {
    name: 'root',
    items: [],
  };
  const files = _get(queryResult, 'allFile.edges');

  files.forEach(file => {
    const categories = _get(file, 'node.childMdx.frontmatter.category');
    const title = _get(file, 'node.childMdx.frontmatter.title');

    const item = { name: title, isFile: true };

    if (!categories) {
      treeBeardData.items.push(item);
      return;
    } else {
      const nextItems = mapCategoriesToItems({
        categories,
        item,
        items: treeBeardData.items,
      });

      treeBeardData.items = nextItems;
    }
  });

  return treeBeardData;
});

export default mapQueryToTreeData;

function mapCategoriesToItems({ categories, item, items }) {
  const nextItems = [...items];
  const [currentDirectory, ...remainingCategories] = categories;

  let exists = false;
  nextItems.forEach(child => {
    if (child.name === currentDirectory) {
      exists = true;
      child.items = mapCategoriesToItems({
        categories: remainingCategories,
        item,
        items: child.items,
      });
    }
  });

  if (!exists) {
    if (!currentDirectory) return nextItems;
    nextItems.push({
      name: currentDirectory,
      items:
        remainingCategories.length > 0
          ? mapCategoriesToItems({
              categories: remainingCategories,
              item,
              items: [],
            })
          : [],
    });
  }

  if (categories.length === 1) {
    nextItems.forEach(child => {
      if (child.name === currentDirectory) {
        child.items.push(item);
      }
    });
  }

  return nextItems;
}
