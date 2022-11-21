// 创建根组件（外壳组件）
import React, { Component } from 'react'

import Hello from './Hello'
import Welcome from './Welcome'

// 定义并暴露App组件
export default class App extends Component {
  render() {
    return (
      <div id="app">
        <Hello />
        <Welcome />
      </div>
    )
  }
}
