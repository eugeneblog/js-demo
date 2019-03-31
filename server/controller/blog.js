const { exec } = require('../db/mysql')

const getList = (author, keyword) => {
    let sql = `select * from blogs where 1=1 `
    if (author) {
        sql += ` and author='${author}' `
    }
    if (keyword) {
        sql += ` and title like '%${keyword}%'`
    }
    sql += ` order by createtime desc;`;
    
    // 返回promise
    return exec(sql)
}

const getDetail = (id) => {
    const sql = `select * from blogs where id='${id}'`
    return exec(sql).then(rows => {
        return rows[0]
    })
}

const newBlog = (blogData= {}) => {
    // blogData 是一个博客对象， 包含所有属性
    // console.log('new blog data...', blogData)
    // return {
    //     id: 3, // 表示新建博客，插入到数据表里的id
    // }
    const title = blogData.title
    const content = blogData.content
    const author = blogData.author
    const createtime = Date.now()

    const sql = `
        insert into blogs (title, content, author, createtime)
        values ('${title}', '${content}', '${author}', ${createtime});
    `
    return exec(sql).then(insertData => {
        console.log('insertData is ',insertData)
        return {
            id: insertData.insertId
        }
    })
}
const updateBlog = (id, blogData={}) => {
    // id 要更新博客的id
    const title = blogData.title
    const content = blogData.content

    const sql = `
        update blogs set title='${title}', content='${content}' where id=${id};
    `
    return exec(sql).then((updateData) => {
        console.log(updateData)
        if (updateData.affectedRows > 0) {
            return true
        } else {
            return false
        }
    })
}
const delBlog = (id, author) => {
    // 要删除博客的id
    const sql = `delete from blogs where id='${id}' and author='${author}'`
    return exec(sql).then((delData) => {
        if (delData.affectedRows > 0) {
            return true
        } else {
            return false
        }
    })
}

module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    delBlog
}