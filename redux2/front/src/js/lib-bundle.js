


/*

    业务模块修改（只打包业务模块）



    公用模块修改（只打包公用模块）
         手动打包公用模块命令
         cd front/src/js
         webpack lib-bundle.js ../../dist/lib.js


*/

//加快webpack打包速度(公用模块放入全局变量，不参与打包)12
window._Lib = {
    "react": require("react"),
    "react-dom": require("react-dom"),
    "react-router": require("react-router"),
    "redux": require("redux"),
    "react-redux": require("react-redux"),
    "redux-thunk": require("redux-thunk"),
    "redux-logger": require("redux-logger"),

    "isomorphic-fetch": require("isomorphic-fetch"),
    "underscore": require("underscore"),
    "react-validation": require("react-validation"),
    "react-addons-css-transition-group": require("react-addons-css-transition-group"),
    "react-addons-transition-group": require("react-addons-transition-group"),

    "redux-devtools": require("redux-devtools"),
    "redux-devtools-log-monitor": require("redux-devtools-log-monitor"),
    "redux-devtools-dock-monitor": require("redux-devtools-dock-monitor"),


};

