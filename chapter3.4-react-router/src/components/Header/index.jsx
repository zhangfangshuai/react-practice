import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import './header.css'

class Header extends Component {

    // 一般组件没有路由组件所特有的history、location、match三个属性，需要使用withRouter来加工
    back = () => {
        this.props.history.goBack()
    }

    forward = () => {
        this.props.history.goForward()
    }

    render() {
        return (
            <div className="app-header">
                <span>React Router Demo</span>

                {/* 回退与前进 */}
                <button onClick={this.back}>Back</button> &emsp;
                <button onClick={this.forward}>Forward</button> &emsp;
            </div>
        )
    }
}
// withRouter 可以用来加工一般组件，让一般组件具备路由组件所特有的API
// withRouter的返回值是一个新组件
// 经过这么加工后，暴露出去的组件就叫高阶组件
export default withRouter(Header)
