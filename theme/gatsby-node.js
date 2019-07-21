const Debug = require('debug');
const fs = require('fs');
const mkdirp = require('mkdirp');

const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onPreBootstrap = ({ store }) => {
  const debug = Debug('gatsby-theme-plume:onPreBoostrap');

  const { program } = store.getState();
  const dir = `${program.directory}/content`;
  debug(`ensuring ${dir} exists`);

  if (!fs.existsSync(dir)) {
    debug(`creating ${dir}`);
    mkdirp.sync(dir);

    debug(`adding a sample hello section folder`);
    mkdirp.sync(dir + '/hello');

    debug(`adding a sample world section item`);
    fs.writeFileSync(
      dir + '/hello' + '/world.md',
      `
# World

This is a world sample file, inside hello section.
    `.trim()
    );
  }

  if (!fs.existsSync(dir + '/home.md')) {
    debug(`adding a sample welcome file`);
    fs.writeFileSync(
      dir + '/home.md',
      `
# Welcome

This is the home page.
    `.trim()
    );
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  createPage({
    path: '/',
    component: require.resolve('./src/templates/page.js'),
  });

  const mdxPageTemplate = require.resolve(`./src/templates/mdx-page.js`);
  return graphql(
    `
      {
        allMdx {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors;
    }

    // Create documentation pages
    const mdxDocuments = result.data.allMdx.edges;

    mdxDocuments.forEach(mdxDocument => {
      const nodeSlug = mdxDocument.node.fields.slug;
      const slug = nodeSlug === '/home/' ? '/' : nodeSlug;

      createPage({
        path: slug,
        component: mdxPageTemplate,
        context: {
          slug: slug,
          id: mdxDocument.node.id,
        },
      });
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'Mdx') {
    const value = createFilePath({ node, getNode });

    createNodeField({
      id: node.id,
      name: `slug`,
      node,
      value,
    });
  }
};
