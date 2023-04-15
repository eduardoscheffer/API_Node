const express = require("express")
const app = express()
const port = 3000
const baloes = require("./database/baloes.json")

app.get("/baloes", (req, res)=> {
    res.send(baloes)
})
app.listen(port)