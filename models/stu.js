const mongoose = require('mongoose')
const Schema = mongoose.Schema


mongoose.connect('mongodb://localhost:27017/shop', { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))

db.once('open', function () {
    console.log('数据库连接成功')
})

const newSchema = new Schema({
    uname: { type: String },
    age: { type: Number },
    sex: { type: String }
})
const User = mongoose.model('sut', newSchema)

// add方法
const createModal = postData => {
    console.log('postData', postData)
    const insertObj = new User(postData)
    return insertObj.save()
        .then(res => {
            return res
        }).catch(err => {
            console.log('插入失败', err)
            return false
        })
}

// 获取列表
const getSutData = () => {
    return User.find()
        .then(res => {
            return res
        }).catch(err => {
            console.log('插入失败', err)
            return []
        })
}

module.exports = {
    createModal,
    getSutData
}