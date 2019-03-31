const { exec } = require('../db/mysql')

const loginCheck = (username, pwd) => {
    const sql = `select username from users where username = '${username}' and password = '${pwd}'`
    return exec(sql).then(rows => {
        return rows[0] || {}
    })
}

module.exports = {
    loginCheck
}