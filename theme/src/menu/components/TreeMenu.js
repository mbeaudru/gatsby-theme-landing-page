import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import TreeLeaf from './TreeLeaf';
import useTreeMenu from '../hooks/useTreeMenu';

export default function TreeMenu() {
  const data = useStaticQuery(graphql`
    query TreeMenuQuery {
      allFile {
        edges {
          node {
            relativePath
            name
            childMdx {
              rawBody
              frontmatter {
                title
                category
              }
            }
          }
        }
      }
    }
  `);

  const [treeData, onToggle] = useTreeMenu(data);

  return (
    <TreeLeaf
      items={treeData.items}
      onToggle={onToggle}
      activePaths={treeData.activePaths}
    />
  );
}
