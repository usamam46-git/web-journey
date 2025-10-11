import 'dotenv/config'
import express from 'express'
// const express = require('express')
const app = express()
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/github',(req,res) => {
  res.send('usamam46-git')
}
)
app.get('/login',(req,res) => {
  res.send('<h1>Hi I am Usama!</h1>')
}
)
app.listen(process.env.PORT, () => {
//   console.log(`Example app listening on port ${PORT}`)
})