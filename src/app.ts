import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import { router } from "./routes/api.route"

dotenv.config()

const app = express()
const PORT =  process.env.PORT
app.use(cors())

app.use("/api", router)

app.listen(PORT, ()=>{
    console.log(`The server is listening on ${PORT}`)
})

