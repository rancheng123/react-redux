import React, { Component, PropTypes } from 'react';

class Login extends Component {
    constructor(){
        super()
    };

    login(){
        window.location.hash = 'index'
    }

    render(){
        return (
            <div id="login">
                <div>
                    姓名：<input type="text" />
                </div>
                <div>
                    密码：<input type="password" />
                </div>
                <div>
                    <input type="button" value="登录" onClick={this.login}/>
                </div>
            </div>
        )
    }
};

export default Login;

