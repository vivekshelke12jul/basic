const express = require('express')
const app = express()

app.use(express.static('public'))


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index')
})


// app.get('/random', (req, res) => {
//     console.log('random route accesed')
//     const num = Math.floor(Math.random()*10)
//     console.log(num)
//     res.status(200).json({info: num})
// })

const port = process.env.PORT || 80;
app.listen(port, "0.0.0.0", console.log('server started'))
