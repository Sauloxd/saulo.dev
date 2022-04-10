---
title: "How to use webpack DLL plugin"
date: "2020-04-01"
description: |
  This was written a long long time ago, when webpack was probably in v3.x.
  This post is a braindump of everything related to my quest, when I was trying to improve our frontend build! The idea was to only compile necessary files, instead of the whole bunch everytime. Nowadays, webpack is so optimized that all theses workaround is not worth the trouble!

tags:
  - Webpack
  - DLL Plugin

---

# Note
I think none of this applies nowadays, so If I were you, I'd probably skip this post!
  But maybe you are in this situation, locked in an old webpack version, or having problems understanding the old DLL paradigm, I hope this text serves you well!

# Webpack DLL plugin

This plugin enables the pre-compilation of artifacts (such as vendors and ultra legacy source-files that `rarely` changes) to be used in your main webpack compilation process in order to improve the speed of said compilation.

Compiling your app that uses lodash, react, highcharts, d3, etc may take a looong time. That is because everytime you compile (the first webpack-dev-server or every webpack) it will compile these libraries! And that is the desired behavior. Imagine you had to serve your app in some ~~sad~~ browser like IE11, and somewhere inside some library you had an arrow function (`()⇒{}`)? bye bye application!

But, what if you did not had to recompile lodash everytime? You hardly change lodash definition, right? Only when you upgrade it, or mess with the source code trying to `console.log` something inside the lib, but that almost never happens, am I right?

With DLLPlugin you can `pre-compile` it (and all vendors you want) and make your webpack "skip" the compilation of these files, since it believes somebody else compiled these already. 

So in order to make everything work, you will need at least 3 steps.

1. Configure and compile your DLL bundle, using `DLLPLugin` This will output a `manifest.json` (basically the information of what was compiled and where inside bundle.js it is stored) and the actual compiled bundle `bundle.js` (names are configurable 😉)
2. Configure your main webpack to understand that it needs to skip compilation of certain files. Using `DLLReferencePlugin` and passing the generated `manifest.json` from step 1, will make webpack smart enough to skip all files already compiled in `bundle.js`
3. Add the `bundle.js` in your page! Your main webpack skipped compilation, but when your app actually run, it will request for the "skipped compiled files"! And that's where your `bundle.js` is used! 

### DLLPlugin

- Using for 'almost never compiled files'
    
```jsx
/* dll.webpack.config.js */
const config = { /* all webpack config */ };
config.entry = {
    legacy: [path.resolve(__dirname, './src/index.js')],
};
// output.library will make all the bundle content be assigned a to global [name] variable
config.output.library = '[name]';
config.output.path = path.resolve(__dirname, 'dir/another_dir')
config.plugins.push(
    new webpack.DllPlugin({
    **// where this DLL will live after compiling. This manifest will be referenced by the DLL consumer!**
    pa**th:** path.resolve(__dirname**, 'dir/another_dir/my-dll-manifest.json'),
    // Just the bundle file name**
        name**: '[name]',
    })
)**
```

```jsx
/* src/index.js */

// This will "require" every files inside './angularjs-es5' that matches the regExp rule.
const req = require.context(
    './angularjs-es5',
    true,
    /^(.*\.((js|slim|html)$))[^.]*$/im,
);

// These are the files I'm confident will almost never change! Well, sortof.
// Read the warning note

req.keys().forEach(key => req(key));
```

**CAREFUL!** If you use DLL for source code (which I don't actually recommend, even if it possible) it will make your developers wonder why their changes are not being reflected in the app. It may take a lot of frustration time, till they come to you and you're like: "oh but you need to recompile the DLL for that... sorry 'mate".

You could make it smart enough to make flags to be run before compiling the main webpack to skip usage of DLLs for legacy source code, so it will take more time, but will have the usual webpack dev experience. But note that if in some point in development, your legacy code start using some "need to be compiled files" like a refactored service, it will make this file also DLL'ed and so, if you are not aware that this file is in DLL bundle, you will have a hard time understanding what the eff is going on. If you plan on gradually migrating your ultra legacy code to newer code, by making your legacy code require newer code, I don't recommend using this strategy. 
    
- Library
    
This is the most common usage! @storybook have this configured in their magic and blazing fast webpack configuration. [AFAIK they pre compile](https://github.com/storybookjs/storybook/blob/3ca95c44bced0ba66aedff53a9a492c9b9e1bffd/lib/ui/scripts/createDlls.js#L21) `'@emotion/core', '@emotion/styled', '@storybook/addons', '@storybook/api', '@storybook/components', '@storybook/core-events', '@storybook/theming', 'airbnb-js-shims', 'emotion-theming', 'prop-types', 'react', 'react-dom', 'regenerator-runtime/runtime'`  [DLLPlugin link](https://github.com/storybookjs/storybook/blob/8e7524fdf9cb74dfbe2b759a4b3cdc841027134d/lib/ui/scripts/webpackDllsConfig.js#L30)

```jsx
const config = { /* all webpack config */ };
config.entry = {
    library: [
    'react',
    'react-dom',
    'lodash',
    ],
};
config.output = {
    filename: 'dll.js',
    path: path.resolve(__dirname, 'dir/another_dir'),
    library: 'dll',
};
config.plugins = [
    new webpack.DllPlugin({
    path: path.resolve(__dirname, 'dir/another_dir/my-dll-manifest.json'),
    name: 'dll',
    })
];

```
    

### DLLReferencePlugin

Easier than compiling DLL, is to actually use (consume) it:

```jsx
/* webpack.config.js */
const dllPath = path.resolve(__dirname, 'dir/another_dir/my-dll-manifest.json'),

config.plugins.push(
  new webpack.DllReferencePlugin({
    manifest: dllPath,
  }),
);
```

**Careful!**

If you will consume the DLL from another context (i.e. the "dir" where you ran `webpack-dev-server --config webpack.config.js` etc) they may have different paths to your library files (your node_modules probably will be 1 or 2 levels deeper). Imagine this scenario:

```jsx
.
├── node_modules
│   ├── react
│   └── lodash
├── packages
│   ├── app
│   │    └──  webpack.config.js
│   ├── core
│   └── ui
└── dll.webpack.config.js
```

On root, when you run `webpack --config dll.webpack.config.js` your my-dll-manifest.json will be:

```jsx
"./node_modules/react/index.js": {
  "id": "./node_modules/react/index.js",
  "buildMeta": { "providedExports": true }
},
```

Because by default, it will use the process context to find the files.

Assuming you are using **`yarn workspaces` ,** if you go inside the dir `packages/app` and run `webpack --config webpack.config.js` this is how your bundle will be:

```jsx
{
...
/***/ "../../../node_modules/react/index.js":
/*!*************************************************************************!*\
  !*** /Users/sauloxd/dev/Qulture/QultureApp/node_modules/react/index.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react.development.js */ "../../../node_modules/react/cjs/react.development.js");
}
/***/  }),
...
}
```

And bam, your dll is not working anymore! You guessed it, the identifier for this module is not the same as the `id` key in dll manifest! I don't quite understand the internals, but I do know that If I set the context right when consuming the DLL (i.e. pass the dir where you are running the compile for DLL) it will handle all path resolving correctly :)

So 2 solutions:

- Run all your wepback compiles from the same context

```jsx
// DO
webpack --config dll.webpack.config.js
webpack --config packages/app/webpack.config.js

// DO NOT
webpack --config dll.webpack.config.js
cd packages/app && webpack --config webpack.config.js
```
    
- Pass the right context of your DLL to your consuming webpack
    
```jsx
const whereMyDllWasCompiledFrom = path.resolve(__dirname, '../../');
const dllPathOnFS = path.resolve(__dirname, '../../dir/another_dir/my-dll-manifest.json'),

config.plugins.push(
    new webpack.DllReferencePlugin({
    context: whereMyDllWasCompiledFrom,
    manifest: dllPathOnFS,
    }),
);
```
    

I'd recommend using `BundleAnalyzerPlugin` to validate if your main bundle is actually skipping the files from your DLL!
