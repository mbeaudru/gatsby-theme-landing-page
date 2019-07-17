const Debug = require('debug');
const fs = require('fs');
const mkdirp = require('mkdirp');

exports.onPreBootstrap = ({ store }) => {
  const debug = Debug('gatsby-theme-plume:onPreBoostrap');

  const { program } = store.getState();
  const dir = `${program.directory}/content`;
  debug(`ensuring ${dir} exists`);

  if (!fs.existsSync(dir)) {
    debug(`creating ${dir}`);
    mkdirp.sync(dir);

    debug(`adding a sample welcome file`);
    fs.writeFileSync(
      dir + '/welcome.md',
      `
# Welcome

This is a welcome file.
    `.trim()
    );

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
};

exports.createPages = ({ actions }) => {
  actions.createPage({
    path: '/',
    component: require.resolve('./src/templates/page.js'),
  });
};
