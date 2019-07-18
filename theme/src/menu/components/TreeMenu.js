import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { gutterSelector } from '../../utils/themeSelectors';
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
            }
          }
        }
      }
    }
  `);

  const [treeData, onToggle] = useTreeMenu(data);

  return (
    <Container>
      <TreeLeaf
        items={treeData.items}
        onToggle={onToggle}
        activePaths={treeData.activePaths}
      />
    </Container>
  );
}

const Container = styled.div`
  width: 280px;
  padding: ${gutterSelector('md')};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
`;
