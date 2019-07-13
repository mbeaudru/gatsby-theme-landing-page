import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import _get from 'lodash/get';
import BackgroundImage from 'gatsby-background-image';
import styled from 'styled-components';
import Layout from '../components/Layout';

const PageTemplate = ({ data }) => {
  const imageSrc = _get(data, 'file.childImageSharp.fluid');

  return (
    <Layout>
      <BackgroundSection Tag="section" fluid={imageSrc} alt="" />
    </Layout>
  );
};

PageTemplate.propTypes = {
  data: PropTypes.shape({
    file: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fluid: PropTypes.string,
      }),
    }),
  }),
};

const BackgroundSection = styled(BackgroundImage)`
  width: 100%;
  height: 800px;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`;

export default PageTemplate;

export const query = graphql`
  query {
    file(relativePath: { eq: "plant-wallpaper-1.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 1000, quality: 100, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
