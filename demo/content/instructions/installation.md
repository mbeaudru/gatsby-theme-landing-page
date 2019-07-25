---
title: Installation
---

# Installation instructions

## Add the theme to your gatsby project

> **Note :** If you don't have any project, just start with _gatsby new my-awesome-project_

Add the theme to your project dependencies:

- `yarn add gatsby-theme-plume`

Declare the plugin in _gatsby-config.js_:

```
module.exports = {
  plugins: ['gatsby-theme-plume'],
};
```

- Run the project and go to _http://localhost:8000/docs_ !

> **Note :** If you don't have any _src/index.js_ file in your project, the theme will also create a default route so that you have a gatsby site exclusively dedicated to your plume documentation.

## Just try the demos

If you just want to try the demos in local, just run:

- `gatsby new my-awesome-documentation https://github.com/mbeaudru/gatsby-theme-plume`
- `cd my-awesome-documentation`

Then you have the choice:

- `yarn demo start`

This will make the semantic-ui-demo run on port 8000 locally.

Or:

- `yarn minimal-demo start`

This will run a minimal gatsby installation that uses _gatsby-theme-plugin_
