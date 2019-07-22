import React from 'react';
import { graphql } from 'gatsby';
import _get from 'lodash/get';
import PropTypes from 'prop-types';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import Layout from '../components/Layout';
import LocationContext from '../contexts/LocationContext';

import * as tags from '../mdx/components/tags';

const components = { ...tags };

const PageTemplate = ({ data, location }) => {
  const node = _get(data, 'allMdx.edges.0.node');

  return (
    <LocationContext.Provider value={location}>
      <Layout>
        <MDXProvider components={components}>
          <MDXRenderer>{node.body}</MDXRenderer>
        </MDXProvider>
      </Layout>
    </LocationContext.Provider>
  );
};

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
