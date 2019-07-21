import { useState, useContext } from 'react';
import _get from 'lodash/get';
import mapQueryToTreeData from '../utils/mapQueryToTreeData';
import LocationContext from '../../contexts/LocationContext';

export default function useTreeMenu(queryData) {
  const location = useContext(LocationContext);
  const initialActivePaths = mapLocationToInitialActivePaths(location);
  const [activePaths, setActivePaths] = useState(initialActivePaths);

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

function mapLocationToInitialActivePaths(location) {
  const activePathsLocationState = _get(location, 'state.activePaths', {});

  let path = '/';

  location.pathname
    .split('/')
    .filter(s => !!s)
    .forEach(folder => {
      path = path + folder + '/';
      activePathsLocationState[path] = true;
    });

  return activePathsLocationState;
}
