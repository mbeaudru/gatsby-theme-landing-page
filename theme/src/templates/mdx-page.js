import React from 'react';
import { graphql } from 'gatsby';
import _get from 'lodash/get';
import PropTypes from 'prop-types';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Layout from '../layouts/MDXPageLayout';
import LocationContext from '../contexts/LocationContext';
import Playground from '../mdx/components/playground/Playground';

import * as tags from '../mdx/components/tags';
import meta from '../meta';

const components = { ...tags, Playground };

const PageTemplate = ({ data, location }) => {
  const node = _get(data, 'allMdx.edges.0.node');

  return (
    <LocationContext.Provider value={location}>
      <Helmet>
        <title>{meta.siteName}</title>
      </Helmet>
      <Layout>
        <Container>
          <MDXProvider components={components}>
            <MDXRenderer>{node.body}</MDXRenderer>
          </MDXProvider>
        </Container>
      </Layout>
    </LocationContext.Provider>
  );
};

const Container = styled.div`
  max-width: 800px;

  > :first-child {
    margin-top: 0;
  }
`;

PageTemplate.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object,
};

export default PageTemplate;

export const pageQuery = graphql`
  query MdxPageQuery($id: String!) {
    allMdx(filter: { id: { eq: $id } }) {
      edges {
        node {
          id
          body
        }
      }
    }
  }
`;
