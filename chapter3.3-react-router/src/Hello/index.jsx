import { Component } from 'react'

// 1. 样式模块化
//    a. 修改文件名为【xxx.module.css】
//    b. 使用变量承接样式，形成样式模块对象
//    c. 修改页面中的样式为模块对象的属性

// 2. 如果不使用样式模块化，就使用less等预编译技术

import hello from './Hello.module.css'

export default class Hello extends Component {
    render() {
        return (
            <div>
                <h2>Hello, React</h2>
                <h4 className={hello.title}>I am Hello Component</h4>
            </div>
        )
    }
}
