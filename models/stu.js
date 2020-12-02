const mongoose = require('mongoose')
const Schema = mongoose.Schema


const db = mongoose.createConnection('mongodb://localhost:27017/shop', { useNewUrlParser: true }, (err) => {
    if (err) {
        console.log('数据库连接失败', err)
    }
    console.log('数据库连接成功')
})

const modal = db.model('stu', {
    uname: { type: String, default: '神龙教主' },
    age: { type: Number },
    sex: { type: String }
})

// 方法
const createModal = postData => {
    const insertObj = new modal(postData)
    return insertObj.save()
        .then(res => {
            return res
        }).catch(err => {
            console.log('插入失败', err)
            return false
        })
}

module.exports = {
    createModal
}