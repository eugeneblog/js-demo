const loginCheck = (username, pwd) => {
    if (username === 'zhangsan' && pwd=='1234') {
        return true
    }
    return false
}

module.exports = {
    loginCheck
}