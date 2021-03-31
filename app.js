const express = require('express')
const app = express()
const port = 3000

app.use((req, res, next) => {
    let start = new Date()
    let localeString = start.toLocaleString('eu-US')
    res.on('finish', () => {
        let finish = new Date()
        let timeUse = finish - start
        console.log(`${localeString} | ${req.method} from ${req.path} | total time: ${timeUse}ms` )
    })
    return next()
})

app.get('/', (req, res) => {
  res.send('列出全部 Todo')
})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})
 
app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})