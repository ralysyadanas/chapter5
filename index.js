
const express = require('express')
const app = express()
//const router = express.Router()
const logger = require("morgan")

const indexRouted = require("./routes")
const userRouted = require("./routes/user")


//app.use(router)
app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.set('view engine','ejs')

app.use(express.static("./public"))
app.use("/", indexRouted)
app.use("/user",userRouted)
// app.get('/', (req,res)=>{
//     res.render('index')
// })

app.get('/login', (req, res) => {
    res.status(200).render('login')
})
app.post('/login', (req, res) => {
    console.log('ok');
    const {name} = req.body;
    res.redirect("/game/index.html");
})


app.listen(3000, ()=>{
    console.log("Hello world")
})