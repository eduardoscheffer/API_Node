const express = require("express")
const app = express()
const port = 3010
const baloes = require("./database/baloes.json")

app.get("/baloes", (req, res)=> {
    res.send(baloes)
})

app.get("/baloes/:id", (req, res) => {
    const id = req.params.id
    
    const baloesEncontrados = baloes.filter((balao) => balao.id == id)

    if (baloesEncontrados.length == 0)
        res.status(404).send()
    
    const balao = baloesEncontrados[0]
    res.send(balao)
})

app.listen(port)