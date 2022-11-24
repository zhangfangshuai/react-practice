import React, { Component } from 'react'

import { Route, Switch, Redirect } from 'react-router-dom'
import MyNavLink from '../../components/MyNavLink'

import News from './News'
import Messages from './Messages'

import './home.css'

export default class Topic extends Component {
    render() {
        return (
            <div className="app-topic">
                <h3>Home Page：编程式路由导航</h3>
                <div className="topic-nav">
                    {/* 这里介绍编程式导航的push/replace写法 */}
                    <MyNavLink to="/home/news">News</MyNavLink>
                    {/* 在这里介绍浏览器的前进与后退功能 */}
                    <MyNavLink to="/home/message">Messages</MyNavLink>
                </div>
                <div className='topic-container'>
                    <Switch>
                        <Route path="/home/news" component={News} />
                        <Route path="/home/message" component={Messages} />
                        <Redirect to="/home/news" />
                    </Switch>
                </div>
            </div>
        )
    }
}
