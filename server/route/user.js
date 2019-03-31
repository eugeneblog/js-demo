const { loginCheck } = require('../controller/user')
const { SuccessModel, ErrorModel } = require('../model/resModel')
const handleUserRouter = (req, res) => {
    const method = req.method

    // 登陆
    if (method === 'POST' && req.path === '/api/user/login') {
        const { username, password } = req.body
        const result = loginCheck(username, password)
        return result.then(data => {
            if (data.username) {
                // 操作cookie
                res.setHeader('Set-Cookie', `username=${data.username}; path=/`)
                return new SuccessModel()
            } else {
                return new ErrorModel('登陆失败')
            }
        })
    }

    // 登陆验证的测试
    if (method === 'GET' && req.path === '/api/user/login-test') {
        if (req.cookie.username) {
            return Promise.resolve(new SuccessModel())
        }
        return Promise.resolve(new ErrorModel('尚未登录'))
    }
}

module.exports = handleUserRouter