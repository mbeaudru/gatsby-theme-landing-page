import { useState } from 'react';
import mapQueryToTreeData from '../utils/mapQueryToTreeData';

export default function useTreeMenu(queryData) {
  const [activePaths, setActivePaths] = useState({});

  const treeData = mapQueryToTreeData(queryData);

  function onToggle(item) {
    if (!item.isDir) return;

    const nextActivePaths = {
      ...activePaths,
      [item.path]: !activePaths[item.path],
    };

    setActivePaths(nextActivePaths);
  }

  treeData.activePaths = activePaths;

  return [treeData, onToggle];
}
