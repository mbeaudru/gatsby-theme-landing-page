import { useState } from 'react';
import mapQueryToTreeData from '../utils/mapQueryToTreeData';

export default function useTreeMenu(queryData) {
  const [activePaths, setActivePaths] = useState([]);

  const treeData = mapQueryToTreeData(queryData);

  function onToggle(item) {
    if (!item.isDir) return;
    const nextActivePaths = activePaths.filter(activePath => {
      return activePath !== item.path;
    });

    if (nextActivePaths.length === activePaths.length) {
      setActivePaths([...activePaths, item.path]);
    } else {
      setActivePaths(nextActivePaths);
    }
  }

  treeData.activePaths = activePaths;

  return [treeData, onToggle];
}
