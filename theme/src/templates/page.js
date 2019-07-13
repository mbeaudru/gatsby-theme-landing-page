import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';

const PageTemplate = ({ pageContext }) => (
  <Layout>
    <h1>{pageContext.heading}</h1>
    <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
  </Layout>
);

PageTemplate.propTypes = {
  pageContext: PropTypes.shape({
    heading: PropTypes.string,
    content: PropTypes.string,
  }),
};

export default PageTemplate;
