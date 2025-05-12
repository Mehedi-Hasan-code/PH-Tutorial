const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send("Hello from my first server")
})

app.get('/data', (req, res) => {
    res.send('More data')
})

app.listen(port, () => {
    console.log(`my first server is running in port 3000`);
})