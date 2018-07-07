react-weback-hot-loader的空白项目
===
[参考链接](https://www.robinwieruch.de/minimal-react-webpack-babel-setup/#react-project-setup)
[参考项目](https://github.com/rwieruch/minimal-react-webpack-babel-setup)

react,webpack都是使用当前最新版本
react 16.x
webpack 4.x
webpack-cli 3.x

- npm init -y
- mkdir -p dist src
- touch dist/index.html src/index.js webpack.config.js .babelrc
- 安装webpack,webpack-dev-server,webapck-cli
    ```
    cnpm install --save-dev webpack webpack-dev-server webpack-cli
    ```
- 安装babel相关的依赖
    ```
    cnpm install --save-dev babel-core babel-loader babel-preset-env babel-preset-react babel-preset-stage-2
    ```
- 安装react, react-dom
    ```
    cnpm install --save react react-dom
    ```
- 安装ract-hot-loader
    ```
    cnpm install --save-dev react-hot-loader
    ```
- 安装style-loader, css-loader, less, less-loader
    ```
    cnpm install --save-dev style-loader css-loader less less-loader
    ```
`.babelrc`
```json
{
    "presets": [
        "env",
        "react",
        "stage-2"
    ]
}
```

`package.json`
```
...,
"scripts" {
    ...,
    "start": "webpack-dev-server --config ./webpack.config.js --mode development",
    ,,,
}
...
```

`webpack.config.js`
```
const webpack = require('webpack');

module.exports = {
    entry: [
        'react-hot-loader/patch',
        './src/index.js'
    ],
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
        publicPath: '/'
    },
    devServer: {
        contentBase: './dist',
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}
```

`dist/index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <div id="app">
        hello react, hello webpack.
    </div>
    <script src="/bundle.js"></script>
</body>
</html>
```

`src/index.js`
```js
import React from 'react';
import ReactDom from 'react-dom';

ReactDom.render(
    <div>hello react, hello webpack</div>,
    document.getElementById('app')
);

module.hot.accept();
```

# 错误处理

在运行过程中报错

```log
ERROR in ./node_modules/.0.2.1@querystring-es3/index.js
Module not found: Error: Can't resolve './decode' in '/Users/tuyu/learn/react-webpack-demo/node_modules/.0.2.1@querystring-es3'
 @ ./node_modules/.0.2.1@querystring-es3/index.js 3:33-52
 @ ./node_modules/.0.11.0@url/url.js
 @ ./node_modules/.3.1.4@webpack-dev-server/client?http://localhost:8080
 @ multi ./node_modules/.3.1.4@webpack-dev-server/client?http://localhost:8080 webpack/hot/dev-server react-hot-loader/patch ./src/index.js

ERROR in ./node_modules/.0.2.1@querystring-es3/index.js
Module not found: Error: Can't resolve './encode' in '/Users/tuyu/learn/react-webpack-demo/node_modules/.0.2.1@querystring-es3'
 @ ./node_modules/.0.2.1@querystring-es3/index.js 4:37-56
 @ ./node_modules/.0.11.0@url/url.js
 @ ./node_modules/.3.1.4@webpack-dev-server/client?http://localhost:8080
 @ multi ./node_modules/.3.1.4@webpack-dev-server/client?http://localhost:8080 webpack/hot/dev-server react-hot-loader/patch ./src/index.js

ERROR in ./node_modules/.3.1.4@webpack-dev-server/client?http://localhost:8080
Module not found: Error: Can't resolve './overlay' in '/Users/tuyu/learn/react-webpack-demo/node_modules/.3.1.4@webpack-dev-server/client'
 @ ./node_modules/.3.1.4@webpack-dev-server/client?http://localhost:8080 10:14-34
 @ multi ./node_modules/.3.1.4@webpack-dev-server/client?http://localhost:8080 webpack/hot/dev-server react-hot-loader/patch ./src/index.js

ERROR in ./node_modules/.3.1.4@webpack-dev-server/client?http://localhost:8080
Module not found: Error: Can't resolve './socket' in '/Users/tuyu/learn/react-webpack-demo/node_modules/.3.1.4@webpack-dev-server/client'
 @ ./node_modules/.3.1.4@webpack-dev-server/client?http://localhost:8080 9:13-32
 @ multi ./node_modules/.3.1.4@webpack-dev-server/client?http://localhost:8080 webpack/hot/dev-server react-hot-loader/patch ./src/index.js

ERROR in ./node_modules/.0.11.0@url/url.js
Module not found: Error: Can't resolve './util' in '/Users/tuyu/learn/react-webpack-demo/node_modules/.0.11.0@url'
 @ ./node_modules/.0.11.0@url/url.js 25:11-28
 @ ./node_modules/.3.1.4@webpack-dev-server/client?http://localhost:8080
 @ multi ./node_modules/.3.1.4@webpack-dev-server/client?http://localhost:8080 webpack/hot/dev-server react-hot-loader/patch ./src/index.js

ERROR in ./node_modules/.16.4.1@react-dom/cjs/react-dom.development.js
Module not found: Error: Can't resolve 'fbjs/lib/ExecutionEnvironment' in '/Users/tuyu/learn/react-webpack-demo/node_modules/.16.4.1@react-dom/cjs'
 @ ./node_modules/.16.4.1@react-dom/cjs/react-dom.development.js 21:27-67
 @ ./node_modules/.16.4.1@react-dom/index.js
 @ ./src/index.js
 @ multi ./node_modules/.3.1.4@webpack-dev-server/client?http://localhost:8080 webpack/hot/dev-server react-hot-loader/patch ./src/index.js

ERROR in ./node_modules/.16.4.1@react-dom/cjs/react-dom.development.js
Module not found: Error: Can't resolve 'fbjs/lib/camelizeStyleName' in '/Users/tuyu/learn/react-webpack-demo/node_modules/.16.4.1@react-dom/cjs'
 @ ./node_modules/.16.4.1@react-dom/cjs/react-dom.development.js 30:24-61
 @ ./node_modules/.16.4.1@react-dom/index.js
 @ ./src/index.js
 @ multi ./node_modules/.3.1.4@webpack-dev-server/client?http://localhost:8080 webpack/hot/dev-server react-hot-loader/patch ./src/index.js

ERROR in ./node_modules/.16.4.1@react-dom/cjs/react-dom.development.js
Module not found: Error: Can't resolve 'fbjs/lib/containsNode' in '/Users/tuyu/learn/react-webpack-demo/node_modules/.16.4.1@react-dom/cjs'
 @ ./node_modules/.16.4.1@react-dom/cjs/react-dom.development.js 27:19-51
 @ ./node_modules/.16.4.1@react-dom/index.js
 @ ./src/index.js
 @ multi ./node_modules/.3.1.4@webpack-dev-server/client?http://localhost:8080 webpack/hot/dev-server react-hot-loader/patch ./src/index.js

ERROR in ./node_modules/.16.4.1@react-dom/cjs/react-dom.development.js
Module not found: Error: Can't resolve 'fbjs/lib/emptyFunction' in '/Users/tuyu/learn/react-webpack-demo/node_modules/.16.4.1@react-dom/cjs'
 @ ./node_modules/.16.4.1@react-dom/cjs/react-dom.development.js 23:20-53
 @ ./node_modules/.16.4.1@react-dom/index.js
 @ ./src/index.js
 @ multi ./node_modules/.3.1.4@webpack-dev-server/client?http://localhost:8080 webpack/hot/dev-server react-hot-loader/patch ./src/index.js

ERROR in ./node_modules/.16.4.1@react/cjs/react.development.js
Module not found: Error: Can't resolve 'fbjs/lib/emptyFunction' in '/Users/tuyu/learn/react-webpack-demo/node_modules/.16.4.1@react/cjs'
 @ ./node_modules/.16.4.1@react/cjs/react.development.js 22:20-53
 @ ./node_modules/.16.4.1@react/index.js
 @ ./src/index.js
 @ multi ./node_modules/.3.1.4@webpack-dev-server/client?http://localhost:8080 webpack/hot/dev-server react-hot-loader/patch ./src/index.js

ERROR in ./node_modules/.16.4.1@react-dom/cjs/react-dom.development.js
Module not found: Error: Can't resolve 'fbjs/lib/emptyObject' in '/Users/tuyu/learn/react-webpack-demo/node_modules/.16.4.1@react-dom/cjs'
 @ ./node_modules/.16.4.1@react-dom/cjs/react-dom.development.js 28:18-49
 @ ./node_modules/.16.4.1@react-dom/index.js
 @ ./src/index.js
 @ multi ./node_modules/.3.1.4@webpack-dev-server/client?http://localhost:8080 webpack/hot/dev-server react-hot-loader/patch ./src/index.js

ERROR in ./node_modules/.16.4.1@react/cjs/react.development.js
Module not found: Error: Can't resolve 'fbjs/lib/emptyObject' in '/Users/tuyu/learn/react-webpack-demo/node_modules/.16.4.1@react/cjs'
 @ ./node_modules/.16.4.1@react/cjs/react.development.js 20:18-49
 @ ./node_modules/.16.4.1@react/index.js
 @ ./src/index.js
 @ multi ./node_modules/.3.1.4@webpack-dev-server/client?http://localhost:8080 webpack/hot/dev-server react-hot-loader/patch ./src/index.js

ERROR in ./node_modules/.16.4.1@react-dom/cjs/react-dom.development.js
Module not found: Error: Can't resolve 'fbjs/lib/getActiveElement' in '/Users/tuyu/learn/react-webpack-demo/node_modules/.16.4.1@react-dom/cjs'
 @ ./node_modules/.16.4.1@react-dom/cjs/react-dom.development.js 25:23-59
 @ ./node_modules/.16.4.1@react-dom/index.js
 @ ./src/index.js
 @ multi ./node_modules/.3.1.4@webpack-dev-server/client?http://localhost:8080 webpack/hot/dev-server react-hot-loader/patch ./src/index.js

ERROR in ./node_modules/.16.4.1@react-dom/cjs/react-dom.development.js
Module not found: Error: Can't resolve 'fbjs/lib/hyphenateStyleName' in '/Users/tuyu/learn/react-webpack-demo/node_modules/.16.4.1@react-dom/cjs'
 @ ./node_modules/.16.4.1@react-dom/cjs/react-dom.development.js 29:25-63
 @ ./node_modules/.16.4.1@react-dom/index.js
 @ ./src/index.js
 @ multi ./node_modules/.3.1.4@webpack-dev-server/client?http://localhost:8080 webpack/hot/dev-server react-hot-loader/patch ./src/index.js

ERROR in ./node_modules/.16.4.1@react-dom/cjs/react-dom.development.js
Module not found: Error: Can't resolve 'fbjs/lib/invariant' in '/Users/tuyu/learn/react-webpack-demo/node_modules/.16.4.1@react-dom/cjs'
 @ ./node_modules/.16.4.1@react-dom/cjs/react-dom.development.js 18:16-45
 @ ./node_modules/.16.4.1@react-dom/index.js
 @ ./src/index.js
 @ multi ./node_modules/.3.1.4@webpack-dev-server/client?http://localhost:8080 webpack/hot/dev-server react-hot-loader/patch ./src/index.js

ERROR in ./node_modules/.16.4.1@react/cjs/react.development.js
Module not found: Error: Can't resolve 'fbjs/lib/invariant' in '/Users/tuyu/learn/react-webpack-demo/node_modules/.16.4.1@react/cjs'
 @ ./node_modules/.16.4.1@react/cjs/react.development.js 19:16-45
 @ ./node_modules/.16.4.1@react/index.js
 @ ./src/index.js
 @ multi ./node_modules/.3.1.4@webpack-dev-server/client?http://localhost:8080 webpack/hot/dev-server react-hot-loader/patch ./src/index.js

ERROR in ./node_modules/.16.4.1@react-dom/cjs/react-dom.development.js
Module not found: Error: Can't resolve 'fbjs/lib/shallowEqual' in '/Users/tuyu/learn/react-webpack-demo/node_modules/.16.4.1@react-dom/cjs'
 @ ./node_modules/.16.4.1@react-dom/cjs/react-dom.development.js 26:19-51
 @ ./node_modules/.16.4.1@react-dom/index.js
 @ ./src/index.js
 @ multi ./node_modules/.3.1.4@webpack-dev-server/client?http://localhost:8080 webpack/hot/dev-server react-hot-loader/patch ./src/index.js

ERROR in ./node_modules/.16.4.1@react-dom/cjs/react-dom.development.js
Module not found: Error: Can't resolve 'fbjs/lib/warning' in '/Users/tuyu/learn/react-webpack-demo/node_modules/.16.4.1@react-dom/cjs'
 @ ./node_modules/.16.4.1@react-dom/cjs/react-dom.development.js 20:14-41
 @ ./node_modules/.16.4.1@react-dom/index.js
 @ ./src/index.js
 @ multi ./node_modules/.3.1.4@webpack-dev-server/client?http://localhost:8080 webpack/hot/dev-server react-hot-loader/patch ./src/index.js

ERROR in ./node_modules/.16.4.1@react/cjs/react.development.js
Module not found: Error: Can't resolve 'fbjs/lib/warning' in '/Users/tuyu/learn/react-webpack-demo/node_modules/.16.4.1@react/cjs'
 @ ./node_modules/.16.4.1@react/cjs/react.development.js 21:14-41
 @ ./node_modules/.16.4.1@react/index.js
 @ ./src/index.js
 @ multi ./node_modules/.3.1.4@webpack-dev-server/client?http://localhost:8080 webpack/hot/dev-server react-hot-loader/patch ./src/index.js

ERROR in ./node_modules/.3.1.4@webpack-dev-server/client?http://localhost:8080
Module not found: Error: Can't resolve 'loglevel' in '/Users/tuyu/learn/react-webpack-demo/node_modules/.3.1.4@webpack-dev-server/client'
 @ ./node_modules/.3.1.4@webpack-dev-server/client?http://localhost:8080 8:10-29
 @ multi ./node_modules/.3.1.4@webpack-dev-server/client?http://localhost:8080 webpack/hot/dev-server react-hot-loader/patch ./src/index.js

ERROR in ./node_modules/.16.4.1@react-dom/cjs/react-dom.development.js
Module not found: Error: Can't resolve 'object-assign' in '/Users/tuyu/learn/react-webpack-demo/node_modules/.16.4.1@react-dom/cjs'
 @ ./node_modules/.16.4.1@react-dom/cjs/react-dom.development.js 22:14-38
 @ ./node_modules/.16.4.1@react-dom/index.js
 @ ./src/index.js
 @ multi ./node_modules/.3.1.4@webpack-dev-server/client?http://localhost:8080 webpack/hot/dev-server react-hot-loader/patch ./src/index.js

ERROR in ./node_modules/.16.4.1@react/cjs/react.development.js
Module not found: Error: Can't resolve 'object-assign' in '/Users/tuyu/learn/react-webpack-demo/node_modules/.16.4.1@react/cjs'
 @ ./node_modules/.16.4.1@react/cjs/react.development.js 18:14-38
 @ ./node_modules/.16.4.1@react/index.js
 @ ./src/index.js
 @ multi ./node_modules/.3.1.4@webpack-dev-server/client?http://localhost:8080 webpack/hot/dev-server react-hot-loader/patch ./src/index.js

ERROR in ./node_modules/.16.4.1@react-dom/cjs/react-dom.development.js
Module not found: Error: Can't resolve 'prop-types/checkPropTypes' in '/Users/tuyu/learn/react-webpack-demo/node_modules/.16.4.1@react-dom/cjs'
 @ ./node_modules/.16.4.1@react-dom/cjs/react-dom.development.js 24:21-57
 @ ./node_modules/.16.4.1@react-dom/index.js
 @ ./src/index.js
 @ multi ./node_modules/.3.1.4@webpack-dev-server/client?http://localhost:8080 webpack/hot/dev-server react-hot-loader/patch ./src/index.js

ERROR in ./node_modules/.16.4.1@react/cjs/react.development.js
Module not found: Error: Can't resolve 'prop-types/checkPropTypes' in '/Users/tuyu/learn/react-webpack-demo/node_modules/.16.4.1@react/cjs'
 @ ./node_modules/.16.4.1@react/cjs/react.development.js 23:21-57
 @ ./node_modules/.16.4.1@react/index.js
 @ ./src/index.js
 @ multi ./node_modules/.3.1.4@webpack-dev-server/client?http://localhost:8080 webpack/hot/dev-server react-hot-loader/patch ./src/index.js

ERROR in multi ./node_modules/.3.1.4@webpack-dev-server/client?http://localhost:8080 webpack/hot/dev-server react-hot-loader/patch ./src/index.js
Module not found: Error: Can't resolve 'react-hot-loader/patch' in '/Users/tuyu/learn/react-webpack-demo'
 @ multi ./node_modules/.3.1.4@webpack-dev-server/client?http://localhost:8080 webpack/hot/dev-server react-hot-loader/patch ./src/index.js +2

ERROR in ./node_modules/.3.1.4@webpack-dev-server/client?http://localhost:8080
Module not found: Error: Can't resolve 'strip-ansi' in '/Users/tuyu/learn/react-webpack-demo/node_modules/.3.1.4@webpack-dev-server/client'
 @ ./node_modules/.3.1.4@webpack-dev-server/client?http://localhost:8080 7:16-37
 @ multi ./node_modules/.3.1.4@webpack-dev-server/client?http://localhost:8080 webpack/hot/dev-server react-hot-loader/patch ./src/index.js

ERROR in multi ./node_modules/.3.1.4@webpack-dev-server/client?http://localhost:8080 webpack/hot/dev-server react-hot-loader/patch ./src/index.js
Module not found: Error: Can't resolve 'webpack/hot/dev-server' in '/Users/tuyu/learn/react-webpack-demo'
 @ multi ./node_modules/.3.1.4@webpack-dev-server/client?http://localhost:8080 webpack/hot/dev-server react-hot-loader/patch ./src/index.js +1

ERROR in ./node_modules/.3.1.4@webpack-dev-server/client?http://localhost:8080
Module not found: Error: Can't resolve 'webpack/hot/emitter' in '/Users/tuyu/learn/react-webpack-demo/node_modules/.3.1.4@webpack-dev-server/client'
 @ ./node_modules/.3.1.4@webpack-dev-server/client?http://localhost:8080 225:21-51
 @ multi ./node_modules/.3.1.4@webpack-dev-server/client?http://localhost:8080 webpack/hot/dev-server react-hot-loader/patch ./src/index.js
ℹ ｢wdm｣: Failed to compile.
```
原因：webpack.config.js文件中extensions属性的值写错，即把'.js'和'.jsx'写做'js'和'jsx'少些了一个点号

2. 错误把node_modules文件夹里的内容也加入了git版本控制
删除.git文件，重新初始化.git文件，编写.gitignore文件后即可

3. pakage.json文件是一个json文件，如果属性之间少写了逗号，会报错误，比如：
```
SyntaxError: Unexpected string in JSON at position 460 (file: /Users/tuyu/test/react-webpack-hot-loader/package.json)
    at JSON.parse (<anonymous>)
    at Object.readJSON (/usr/local/lib/node_modules/cnpm/node_modules/npminstall/lib/utils.js:21:17)
    at readJSON.next (<anonymous>)
    at onFulfilled (/usr/local/lib/node_modules/cnpm/node_modules/co/index.js:65:19)
    at <anonymous>
```