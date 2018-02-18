
## Overview

Minimal React app that uses webpack to build a distribution, rather than 'create-react-app'.

## See

https://medium.codylamson.com/minimum-viable-webpack-babel-react-setup-without-create-react-app-47959f43fbac

https://medium.com/bcgdv-engineering/when-using-react-js-webpack-dev-server-does-not-bundle-c2d340b0a3e8

https://medium.com/javascript-training/beginner-s-guide-to-webpack-b1f1a3638460

## Initial app

```
  $ cd ~/git
  $ mkdir test-webpack
  $ cd test-webpack/
  $ npm init -y

  $ mkdir src
  $ touch src/index.js
  $ mkdir public
  $ touch public/index.html
```

## Add to dependencies:

```
  $ npm install react react-dom --save
```

## Add to devDependencies:

```
  $ npm install babel-core babel-loader babel-preset-es2015 babel-preset-react babel-preset-stage-2 clean-webpack-plugin css-loader html-webpack-plugin react-hot-loader style-loader webpack webpack-dev-server webpack-merge --save-dev
  $ npm install uglifyjs-webpack-plugin --save-dev
```

## Create webpack files:

```
  $ touch webpack.config.common.js webpack.config.dev.js webpack.config.prod.js

  <Add content as per webpage>
```

## Start the test server:

```
  $ webpack-dev-server --config webpack.config.dev.js
```

## package.json

The -p flag in _build_ stops it from running the server, and just builds the files into _dist_.
```
  "scripts": {
    "build": "webpack -p --config webpack.config.dev.js",
    "start": "webpack-dev-server --config webpack.config.dev.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  }
```

So that can run:

```
  $ npm run build
```

