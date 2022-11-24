import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {

    /**
     * @func 发送一个Ajax请求（axios框架）
     * @desc 
     * （1）使用express配置一个web服务器，启动端口为3300；
     * 
     * （2）直接在如下axios.get()里请求3300服务器的资源，会发生跨域；Access-Control-Allow-Origin
     * 
     * （3）在package.json文件末尾添加 "proxy": "http://localhost:3300"，代理转发服务到xxx:3300上。
     *      形成了【前端3000 => 代理3000 => express服务器3300】路线解决了跨域，
     *      代理必须开在前端项目所在服务端口上，因为跨域是发生在ajax请求响应接收时的。
     * 
     * （3.1）package配置proxy是初级用法，正确的用法应该是在src目录下创建setupProxy.js。
     *      必须在该路径且为该名字，react会在该路径下找到该文件，并给webpack执行。
     *      该文件必须是commonJs规范，不能使用ES6规则，因为webpack是在node环境下运行的。
     *          - 其实package.json底层走的也是3.1，只不是react帮我们生成了该文件而已。
     * 
     * （4）修改请求到代理服务器上
     *     - 通常情况下，这里会做二次封装，如果是本地开发，则使用代理服务器的baseURL，否则使用线上baseURL。
     */

    getStudentsData = () => {
        axios.get('http://localhost:3000/proxy3300/students').then(res => {
            const { data } = res || {}
            console.log('Student接口返回数据:', data)
        }).catch(e => {
            console.log('Student失败了');
        })
    }

    getCarsData = () => {
        axios.get('http://localhost:3000/proxy3500/cars').then(res => {
            const { data } = res || {}
            console.log('Cars接口返回数据:', data)
        }).catch(e => {
            console.log('Cars失败了');
        })
    }

    render() {
        return (
            <div style={{ margin: '10vh 10vw' }}>
                <button onClick={this.getStudentsData}>获取学生数据</button> &emsp;
                <button onClick={this.getCarsData}>获取汽车数据</button>
            </div>
        )
    }
}
