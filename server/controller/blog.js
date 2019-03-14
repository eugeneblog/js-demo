const getList = (author, keyword) => {
    return [
        {
            id: 1,
            title: '标题A',
            content: '内容A',
            createTime: 1552573589785,
            author: 'Eugene'
        }, {
            id: 2,
            title: '标题B',
            content: '内容B',
            createTime: 1552573613370,
            author: 'Job'
        }
    ]
}

const getDetail = (id) => {
    return {
        id: 1,
        title: '标题A',
        content: '内容A',
        createTime: 1552573589785,
        author: 'Eugene'
    }
}

const newBlog = (blogData= {}) => {
    // blogData 是一个博客对象， 包含所有属性
    console.log('new blog data', blogData)
    return {
        id: 3 // 表示新建博客，插入到数据表里的id
    }
}

module.exports = {
    getList,
    getDetail,
    newBlog
}