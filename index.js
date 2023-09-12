const express = require('express')
const app = express()
const path = require('path')
const port = 3000
app.use(express.json());
var cookieParser = require('cookie-parser')
app.use(cookieParser());
/////////////////////////////////////////////


// endpoint de prueba
app.get('/', (req, res) => {
    console.log('entró a /')
    res.send('Hola, mundo!')
})


/////////////////////////////////////////////
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
