const mysql = require('mysql')
const { MYSQL_CONFIG } = require('../config/db')

// 创建连接对象
const con = mysql.createConnection(MYSQL_CONFIG)

// 开始连接
con.connect()

// 执行sql的函数
function exec(sql) {
    const promise = new Promise((resolve, reject) => {
        con.query(sql, (err, result) => {
            if (err) {
                console.log(err)
                reject(err)
                return
            }
            resolve(result)
        })
    })
    return promise
}

module.exports = {
    exec
}