const express = require('express')
const bodyparser = require('body-parser')
const stuController = require(process.cwd() + '/controller/stu')

const app = express()

app.use(bodyparser.urlencoded({ extende: true }))
app.use(bodyparser.json())


app.get('/', (req, res) => {
    res.send('hello world')
})

app.post('/stu', stuController.create)
app.get('/stu', stuController.getStuList)

app.listen(3000, () => {
    console.log('server start http://localhost:3000')
})
