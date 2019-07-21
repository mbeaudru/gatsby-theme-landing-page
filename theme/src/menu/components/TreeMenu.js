import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import TreeLeaf from './TreeLeaf';
import useTreeMenu from '../hooks/useTreeMenu';

export default function TreeMenu() {
  const data = useStaticQuery(graphql`
    query TreeMenuQuery {
      allMdx {
        edges {
          node {
            frontmatter {
              title
              category
            }
            fields {
              slug
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
