import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Detail from '../Messages/Detail'

import '../topic.css'

export default class News extends Component {
    state = {
        messageArr: [
            { id: '001', title: 'News1' },
            { id: '002', title: 'News2' },
            { id: '003', title: 'News3' },
            { id: '004', title: 'News4' },
            { id: '005', title: 'News5' },
        ]
    }

    render() {
        return (
            <div>
                <ul className='topic-msg'>
                    {
                        this.state.messageArr.map(msg => {
                            return (
                                <li key={msg.id}>
                                    {/* 开启路由replace模式 */}
                                    <Link replace to={{ pathname: '/topic/news/detail', state: { id: msg.id, title: msg.title } }}>{msg.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <Route path='/topic/news/detail' component={Detail} />
            </div>
        )
    }
}
