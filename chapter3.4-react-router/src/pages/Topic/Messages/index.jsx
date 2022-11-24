import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'

import Detail from './Detail'

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

    render() {
        return (
            <div>
                <ul className='topic-msg'>
                    {
                        this.state.messageArr.map(msg => {
                            return (
                                <li key={msg.id}>
                                    {/* 向路由组件传递参数 （此处无需高亮效果，因此不用NavLink） */}
                                    {/* 方法一：向路由组件传递params参数 */}
                                    {/* <Link to={`/topic/message/detail/${msg.id}/${msg.title}`}>{msg.title}</Link> */}
                                    
                                    {/* 方法二：向路由组件传递search参数 */}
                                    {/* <Link to={`/topic/message/detail/?id=${msg.id}&title=${msg.title}`}>{msg.title}</Link> */}

                                    {/* 方法三：向路由组件传递state参数 */}
                                    <Link to={{ pathname: '/topic/message/detail', state: {id: msg.id, title: msg.title}}}>{msg.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
                {/* 方法一：标记和接收params参数 */}
                {/* <Route path='/topic/message/detail/:id/:title' component={Detail} /> */}

                {/* 方法二：search参数无需声明接收 */}
                {/* <Route path='/topic/message/detail' component={Detail} /> */}

                {/* 方法三：search参数无需声明接收 */}
                <Route path='/topic/message/detail' component={Detail} />
            </div>
        )
    }
}
