import React, { Component } from 'react'
// import qs from 'querystring' // react脚手架提前安装了

import './detail.css'

/*
    // webpack5需要添加polyfill
    形如：name=tom&age=18，即 key1=value1&key2=value2 的编码形式叫 urlencode
    let obj = { name: 'tom', age: 18 }
    qs.stringify(obj)  // 输出 name=tom&age=18

    let str = 'car=宝马&price=199'
    qs.parse(str) // 输出 { car: '宝马', price: 199 }
 */


const mockData = [
    { id: '001', content: '我爱你 中国' },
    { id: '002', content: '我爱你 北京' },
    { id: '003', content: '我爱你 上海' },
    { id: '004', content: '我爱你 深圳' },
    { id: '005', content: '我爱你 广州' },
]
export default class Detail extends Component {
    render() {
        // 接收params参数
        // const { match: { params: { id, title } } } = this.props

        // 接收search参数
        // const { search } = this.props.location
        // const { id, title } = qs.parse(search.slice(1))

        // 接收state参数 - 刷新后内容不会丢失，因为其依赖了浏览器的history。但是如果清除了浏览器缓存，则数据会丢失
        const { id, title } = this.props.location.state || {}

        const contentObj = mockData.find(item => {
            return item.id === id
        }) || {}
        return (
            <div className='topic-msg-detail'>
                <p>ID: {id}</p>
                <p>TITLE: {title}</p>
                <p>CONTENT: {contentObj.content}</p>
            </div>
        )
    }
}
