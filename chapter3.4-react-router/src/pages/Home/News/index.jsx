import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Detail from '../Messages/Detail'

import '../home.css'

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

    // 编程式导航写法
    pushShow = (id, title) => {
        // params传递参数
        // this.props.history.push(`/home/news/detail/${id}/${title}`)

        // search传递参数
        // this.props.history.push(`/home/news/detail/?id=${id}&title=${title}`)

        // state传递参数
        this.props.history.push({ pathname: '/home/news/detail', state: {id, title}})
    }

    replaceShow = (id, title) => {
        // params传递参数
        // this.props.history.replace(`/home/news/detail/${id}/${title}`)

        // search传递参数
        // this.props.history.replace(`/home/news/detail/?id=${id}&title=${title}`)

        // state传递参数
        this.props.history.replace({ pathname: '/home/news/detail', state: { id, title } })
    }

    render() {
        return (
            <div>
                <ul className='home-news'>
                    {
                        this.state.messageArr.map(msg => {
                            return (
                                <li key={msg.id}>
                                    <Link to={{ pathname: '/home/news/detail', state: { id: msg.id, title: msg.title } }}>{msg.title}</Link>
                                    &emsp;
                                    <button onClick={() => this.pushShow(msg.id, msg.title)}>push导航</button>
                                    &emsp;
                                    <button onClick={() => this.replaceShow(msg.id, msg.title)}>replace导航</button>
                                </li>
                            )
                        })
                    }
                </ul>
                <Route path='/home/news/detail' component={Detail} />
            </div>
        )
    }
}
