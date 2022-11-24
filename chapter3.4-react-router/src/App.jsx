import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import MyNavLink from './components/MyNavLink'
import Header from './components/Header'
import About from './pages/About'
import Home from './pages/Home'
import Topic from './pages/Topic'

import './App.css'

export default class App extends Component {
    render() {
        return (
            <div className="app">
                <Header />
                <div className="app-body">
                    <div className="app-nav">
                        <MyNavLink to="/home">Home</MyNavLink>
                        <MyNavLink to="/about">About</MyNavLink>
                        <MyNavLink to="/topic">Topic</MyNavLink>
                    </div>
                    <div className="app-container">
                        {/* Switch禁止路由全查询，找到即停止 */}
                        <Switch>
                            {/* exact表示精确匹配，不需要就不要用，开启了严格匹配后，该路由下的所有嵌套路由都无法使用 */}
                            <Route path="/home" component={Home} />
                            <Route path="/about" component={About} />
                            <Route path="/topic" component={Topic} />
                            {/* Redirect写在最下方，如果都没匹配上，则执行他 */}
                            <Redirect to="/home" />
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}
