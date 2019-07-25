---
title: Installation
---

# Installation instructions

## In your existing gatsby project

Add the theme to your project dependencies:

- `yarn add gatsby-theme-plume`

Declare the plugin in _gatsby-config.js_:

```
module.exports = {
  plugins: ['gatsby-theme-plume'],
};
```

Run the project !

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
