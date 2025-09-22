const express = require("express")
const path = require("path") // module for file paths
const app = express()

// handle all static files in the /public folder
app.use(express.static(path.join(__dirname, "public")))
app.use(express.json())

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"))
})

app.get("/signup", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "sign_up.html"))
})

app.post("/signup", (req, res) => {
    console.log(req.body)
    res.send("Sign up received!")
})
app.listen(3000)