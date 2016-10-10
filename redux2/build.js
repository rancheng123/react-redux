'use strict'

const buildConfig = require('./buildConfig.js');
const gulp = require('gulp');
const fs = require('fs');
const child_process = require('child_process');

//webpack
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
var myDevConfig = Object.create(webpackConfig);
var devCompiler = webpack(myDevConfig);

const moment = require('moment');

//测试数据
var data_test = buildConfig.srcPath + 'js/data/**/**.json';

var watchOption = [
    buildConfig.srcPath + 'js/**/**.js',
    buildConfig.srcPath + 'scss/**/**.scss',
    data_test
];



gulp.watch(watchOption, function(){

    //开始构建
    buildStart()

});

//开始构建
buildStart();


/*测试 start*/
var Lib_watchOption = [
    buildConfig.srcPath + 'js/lib-bundle.js'
];

gulp.watch(Lib_watchOption, function(){

    //cmd命令配置（DOS命令）
    const commadCofig = {
        lib: 'cd front/src/js & webpack lib-bundle.js ../../dist/lib.js'
    }

    var workerProcess = child_process.exec(commadCofig.lib,
        function (error, stdout, stderr) {
            if (error) {
                console.log('error.stack');
                console.log(error.stack);
                console.log('Error code: '+error.code);
                console.log('Signal received: '+error.signal);
            }

            //输出执行结果
            console.log(stdout);
            //输出执行错误
            console.log(stderr);
        });

    workerProcess.on('exit', function (code) {
        console.log('子进程已退出，退出码 '+code);
    });
});
/*测试 end*/



//开始构建
function buildStart(){
    webpack_compileStart();
    copyData();
};

//开始编译
function webpack_compileStart(){
    var startTime = new Date().getTime();
    webpackLog('webpack compile 开始')
    devCompiler.run(function(err, stats) {

        if(err){
            webpackLog('webpack compile 出错')
        };
        var endTime = new Date().getTime();
        //毫秒
        var millisecond = endTime-startTime;
       // 秒
        var seconds = millisecond/1000;


        webpackLog('webpack compile 完成')
        webpackLog('webpack compile 花费'+millisecond+'毫秒（'+ seconds +'秒）')

    });
}

//复制数据
function copyData(){
    webpackLog('复制数据 开始')

    gulp.src( data_test )
        .pipe(gulp.dest( buildConfig.distPath + 'js/data/'));

    webpackLog('复制数据 完成')
}

function webpackLog(msg){
    console.log('--------  '+ msg +'  '+ moment(new Date()).format('HH:mm:ss') +' ----------');
}







