
var buildConfig = require('./buildConfig.js');

var webpack = require('webpack');
//用于提取多个入口文件的公共脚本部分，然后生成一个 common.js 来方便多页面之间进行复用。
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
    //插件项
    plugins: [
        commonsPlugin
    ],
    //页面入口文件配置
    entry: {
        index : buildConfig.srcPath + 'js/router.js',
       // 'commentEs6':buildConfig.srcPath + 'js/compents/login/order/order_list.js'


        //支持数组形式，将加载数组中的所有模块，但以最后一个模块作为输出
       // page2: ["./entry1", "./entry2"]
    },
    //入口文件输出配置
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

        /*
            注意点：
                需要提前加载插件 style-loader
                              css-loader
                              sass-loader
                              jsx-loader
                              url-loader
                     通过cnpm install jsx-loader --save-dev
        */


        //加载器配置
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            {
                test: /\.js$/,
                                            //ES2015转码规则       react转码规则
                loader: 'babel-loader?presets[]=es2015&presets[]=react'
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
        'react-addons-transition-group': 'window._Lib["react-addons-transition-group"]',


        'redux-devtools': 'window._Lib["redux-devtools"]',
        'redux-devtools-log-monitor': 'window._Lib["redux-devtools-log-monitor"]',
        'redux-devtools-dock-monitor': 'window._Lib["redux-devtools-dock-monitor"]',


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