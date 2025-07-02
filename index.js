import express from "express"
import routes from "./routes/routes.js"
import connection from "./connection/connection.js"
import { SERVER_PORT } from "./config/config.js"
import cookieParser from "cookie-parser"

const app= express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(routes)

await connection.sync({force:false})

app.listen(SERVER_PORT, ()=>{
     console.log(`🚀 ~ app.listen ~ ${8080}`)
})