import React from 'react';
import { graphql } from 'gatsby';
import _get from 'lodash/get';
import PropTypes from 'prop-types';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/Layout';

const PageTemplate = ({ data }) => {
  const node = _get(data, 'allMdx.edges.0.node');
  return (
    <Layout>
      <MDXRenderer>{node.body}</MDXRenderer>
    </Layout>
  );
};

PageTemplate.propTypes = {
  data: PropTypes.object,
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
