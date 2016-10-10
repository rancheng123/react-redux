import React, { Component, PropTypes } from 'react';

import _ from 'underscore';
//验证插件
import Validation from 'react-validation';


import { Provider , connect } from 'react-redux';




//扩展Validation的规则
Object.assign(Validation.rules, {
    required: {
        rule: (value, component, form) => {
            return value.trim();
        },
        hint: value => {
            return <span className='form-error is-visible'>Required</span>
        }
    },
    email: {
        rule: value => {
            return /^[123]+$/.test(value);
        },
        hint: value => {
            return <span className='form-error is-visible'>{value} isnt an Email.</span>
        }
    },
    init: {
        rule: (value, component, form) => {
            return /^[\d]+$/.test(value);
        },
        hint: value => {
            return <span className='form-error is-visible'>请输入整数</span>
        }
    },
    password: {
        rule: (value, component, form) => {
            // form.state.states[name] - name of corresponding field
            let password = form.state.states.password;
            let passwordConfirm = form.state.states.passwordConfirm;
            // isUsed, isChanged - public properties
            let isBothUsed = password && passwordConfirm && password.isUsed && passwordConfirm.isUsed;
            let isBothChanged = isBothUsed && password.isChanged && passwordConfirm.isChanged;

            if (!isBothUsed || !isBothChanged) {
                return true;
            }

            return password.value === passwordConfirm.value;
        },
        hint: value => {
            return <span className='form-error is-visible'>Passwords should be equal.</span>
        }
    }
});




class AddProduct extends Component {
    constructor(){
        super();

    };
    componentWillMount(){
        console.log('productAdd 即将加载')

        const { dispatch } = this.props;

        dispatch({
            type: 'product_add_state'
        });
    };

    submit(){

        //校验全部
        var res = this.refs.form.validateAll();

        if( _.isEmpty(res)  ){
            window.location.hash='productList';
        };

    };

    render(){


        // 通过调用 connect() 注入:
        const { dispatch, visibleTodos, visibilityFilter } = this.props;
        console.log('product')
        console.log(visibleTodos);

        return (
            <Validation.components.Form ref="form">
                <div id="login">
                    <div>
                        名称：

                        {/* 注意点
                            1. value 必须加，防止报错
                            2. name 必须加，防止操作多个
                         */}
                        <Validation.components.Input type="text"
                                                        value=""
                                                        name="name"
                                                        validations={['required','email']}/>
                    </div>
                    <div>
                        价格：<Validation.components.Input type="text"
                                                        value=""
                                                        name="price"
                                                        validations={['required','init']}/>
                    </div>
                    <div>
                        <input type="button" value="提交" onClick={this.submit.bind(this)}/>


                        <input type="button" value="1" id="1"/>
                        <input type="button" value="2" id="2"/>
                    </div>
                </div>
            </Validation.components.Form>
        )
    }
};

export default connect(function(state  /*全局state*/) {

    //return  给当前组件  添加属性（根据需要，从全局state中选）
    return {
        visibleTodos: state,
        visibilityFilter: state
    };
})(AddProduct);
//export default AddProduct;


/*

 */





