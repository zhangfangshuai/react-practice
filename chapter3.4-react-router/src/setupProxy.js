/**
 * @func 配置代理服务器
 */

// v1.x版本后不能使用 const proxy = require('http-proxy-middleware')，需改成如下
// 为了兼容代码，可以在结构复值时重写一下变量名
const { createProxyMiddleware:proxy } = require('http-proxy-middleware')

module.exports = function(app) {
    app.use(
        proxy('/api', { // 遇见/api前缀的请求，那么触发该代理配置
            target: 'http://localhost:8080', // 要代理的目标服务器，即转发给谁
            changeOrigin: true, // 控制服务器收到的响应透中的Host字段的值。true-谁发出就是谁，false-始终为原始发起者
            pathRewrite: { // 去除请求前缀，保证服务器拿到的是正确的API地址
                '^/api': ''
            }
        }),
        proxy('/proxy3300', {
            target: 'http://localhost:3300',
            changeOrigin: true,
            pathRewrite: {
                '^/proxy3300': ''
            }
        }),
        proxy('/proxy3500', {
            target: 'http://localhost:3500',
            changeOrigin: true,
            pathRewrite: {
                '^/proxy3500': ''
            }
        })
    )
}
