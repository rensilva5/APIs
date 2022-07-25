//const http = require("http")
const express = require("express")
const app = express()
const port = 3001

// calling the port 
app.listen(port, () => {
    console.log((`started on port ${port}`))
})