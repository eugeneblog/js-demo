const env = process.env.NODE_ENV // 获取环境变量

// mysql 配置
let MYSQL_CONFIG;

if (env === 'dev') {
    MYSQL_CONFIG = {
        host: 'localhost',
        user: 'root',
        password: 'eugene123456',
        port: '3306',
        database: 'localschemas'
    }
}

if (env === 'production') {
    MYSQL_CONFIG = {
        host: '47.92.140.198',
        user: 'root',
        password: 'lsc2529258',
        port: '3306',
        database: 'smartioschemas'
    }
}

module.exports = {
    MYSQL_CONFIG
}