import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'

import Detail from './Detail'

import '../home.css'

export default class Messages extends Component {
    
    state = {
        messageArr: [
            { id: '001', title: 'message1' },
            { id: '002', title: 'message2' },
            { id: '003', title: 'message3' },
            { id: '004', title: 'message4' },
            { id: '005', title: 'message5' },
        ]
    }

    back = () => {
        this.props.history.goBack()
    }

    forward = () => {
        this.props.history.goForward()
    }

    go = () => {
        this.props.history.go(-2)
    }

    render() {
        return (
            <div className='home-msg'>
                <ul>
                    {
                        this.state.messageArr.map(msg => {
                            return (
                                <li key={msg.id}>
                                    <Link to={{ pathname: '/home/message/detail', state: {id: msg.id, title: msg.title}}}>{msg.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <Route path='/home/message/detail' component={Detail} />

                <br />
                <br />
                {/* 回退与前进 */}
                <button onClick={this.back}>Back</button> &emsp;
                <button onClick={this.forward}>Forward</button> &emsp;

                {/* 后退2个历史记录 */}
                <button onClick={this.go}>Go（-2）</button>
            </div>
        )
    }
}
