/**
 * @func 入口文件
 * @desc webpack打包入口文件
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// 页面性能监测与分析插件。
import reportWebVitals from './reportWebVitals';

// ReactDOM是新版本提供的API，与ReactDOM.render(<APP/>, document.getElementById('root'))核心功能相同
// index.js并没有被public/index.html引入，这是React底层在Webpack上配置好的文件关系。因此这两个文件名字不能改。
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // React.StrictMode与js的严格模式无关，
  // 该组件功能是：检查APP及APP的子组件是否都合法，如字符串ref已不被推荐，会被提示出来
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
