require('./popagation.scss');

import React, { Component, PropTypes } from 'react';
import { Provider , connect } from 'react-redux';


class Popagation extends Component {
    constructor(){
        super();
    };

    componentWillMount(){

    };

    clickFn(ev){

        // 通过调用 connect() 注入:
        const { dispatch } = this.props;

        //修改分页状态
        dispatch({
            type: 'CHANGE_PAGENUM',
            pageNum: ev.target.value
        });

        //调取数据
        this.props.config.callback();


    };

    blurFn(ev){

        // 通过调用 connect() 注入:
        const { dispatch } = this.props;
        //修改分页状态
        dispatch({
            type: 'CHANGE_PAGESIZE',
            pageSize: ev.target.value
        });

        //调取数据
        this.props.config.callback();
    };

    render() {
        const { pageNum, pageSize, totalNum } = this.props;

        //解决数字不能循环的问题
        var arr = [];
        for(var i=0;i<Math.ceil(totalNum/pageSize);i++){
            arr[i] = i;
        };


        var btnsHtml = arr.map((ele,i)=>{

            if( pageNum ==(i+1) ){
                var classStr = 'active';
            }else{
                var classStr = '';
            }


            return (
                <input className={
                    classStr
                    }
                       type="button" key={i} value={i+1} onClick={this.clickFn.bind(this)}/>
            )
        });

        return (
            <div className="react-popagation-box">
                <input type="button" value="首页" onClick={this.clickFn.bind(this)}/>
                {btnsHtml}
                <input type="text" onBlur={this.blurFn.bind(this)}/>
                <input type="button" value="末页" onClick={this.clickFn.bind(this)}/>
            </div>
        )
    }
};

export default connect(function(state) {
    return {
        pageNum: state.popagation.pageNum,
        pageSize: state.popagation.pageSize,
        totalNum: state.popagation.totalNum
    };
})(Popagation);
