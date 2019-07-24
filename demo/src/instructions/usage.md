---
title: Usage
---

# How to use

## Content creation

### MDX

- Use frontmatter category & title properties to make your content appear into the tree.

## Theme customization

**Theme shadowing** is a gatsby feature that allows you to replace any file / component of the theme by your own if you want to.

In making the theme, we purposedly made some components explicitly available for shadowing. The intent is to use this feature for maximal customization power - but making the most commonly customized files easily accessible.

### Files you probably want to shadow

For minor customization, those files should be sufficient. If the default appeareance already satisfies you, shadowing only those files should do the trick:

- _colors.js_

As the name implies, this file contains the colors used to make the documentation: change those and you can easily add your touch to the site, without heavy changes.

- _meta.js_

At the moment, only contains the _siteName_ key that you will want to override.

- _tags.js_

This file contains all the style used to produce the html tags for your markdown. If you need to customize how the headers, table or anything of this kind are rendered, shadow this file, copy its content and customize !

### Files you might shadow

If you need a higher degree of customization, here are the files you will probably have to shadow:

- _themeConfig.js_

Contains some global css styles and font rendering settings (family, size).

- every files of _components_ folder

I extracted most of the _dumb_ components used to produce the UI in this folder so that you can easily find them and override them.
