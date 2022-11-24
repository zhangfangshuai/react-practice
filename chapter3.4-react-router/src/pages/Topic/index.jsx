import React, { Component } from 'react'

import { Route, Switch, Redirect } from 'react-router-dom'
import MyNavLink from '../../components/MyNavLink'

import News from './News'
import Messages from './Messages'

import './topic.css'

export default class Topic extends Component {
    render() {
        return (
            <div className="app-topic">
                <h3>Topic Page：路由传参的三种方式，及开启history的replace模式</h3>
                <div className="topic-nav">
                    <MyNavLink to="/topic/news">News</MyNavLink>
                    <MyNavLink to="/topic/message">Messages</MyNavLink>
                </div>
                <div className='topic-container'>
                    <Switch>
                        {/* 在News里介绍路由跳转push/replace */}
                        <Route path="/topic/news" component={News} />
                        {/* 在Message里介绍路由传参的三种办法 */}
                        <Route path="/topic/message" component={Messages} />
                        <Redirect to="/topic/news" />
                    </Switch>
                </div>
            </div>
        )
    }
}
