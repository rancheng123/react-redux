
var buildConfig = require('./buildConfig.js');

var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
    plugins: [
        commonsPlugin
    ],
    entry: {
        index : buildConfig.srcPath + 'js/router.js'
    },
    output: {
        path:  buildConfig.distPath,
        filename: '[name].js'
    },
    //好像不起作用（目前用的是 gulp watch）
    watch: true,
    //chrome source-map调试（chrome引入了source-map文件，标识es5代码对应的转码前的es6代码哪一行）
    devtool: 'source-map',
    //devtool: "#eval-source-map",

    module: {
        //js的 loader，  只配一个 babel， 其他需求全部用babel插件

        //加载器配置
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            {
                test: /\.js$/,
                                            //babel-loader 解析es6
                loader: 'jsx-loader?harmony!babel-loader?presets[]=es2015&presets[]=react'
            },
            { test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader?sourceMap'},
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
        ]
    },
    //其它解决方案配置
    resolve: {
        //根目录（绝对路径）
        root: 'D:/test/other/redux2',
        //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
        extensions: ['', '.js', '.json', '.scss'],

        //模块别名定义，方便后续直接引用别名，无须多写长长的地址（请求重定向）
        alias: {
            AppStore : 'js/stores/AppStores.js',  //后续直接 require('AppStore') 即可
            ActionType : 'js/actions/ActionType.js',
            AppAction : 'js/actions/AppAction.js'
        }
    },

    //不依赖模块，直接访问全局变量
    externals: {
        'react': 'window._Lib["react"]',
        'react-dom': 'window._Lib["react-dom"]',
        'react-router': 'window._Lib["react-router"]',
        'redux': 'window._Lib["redux"]',
        'react-redux': 'window._Lib["react-redux"]',
        'redux-thunk': 'window._Lib["redux-thunk"]',
        'redux-logger': 'window._Lib["redux-logger"]',


        'isomorphic-fetch': 'window._Lib["isomorphic-fetch"]',
        'underscore': 'window._Lib["underscore"]',
        'react-validation': 'window._Lib["react-validation"]',
        'react-addons-css-transition-group': 'window._Lib["react-addons-css-transition-group"]',
        'react-addons-transition-group': 'window._Lib["react-addons-transition-group"]'














    }

};



/*
    执行webpack 命令行

        webpack --display-error-details

         webpack --config XXX.js   //使用另一份配置文件（比如webpack.config2.js）来打包

         webpack --watch   //监听变动并自动打包

         webpack -p    //压缩混淆脚本，这个非常非常重要！

         webpack -d    //生成map映射文件，告知哪些模块被最终打包到哪里了

*/