import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import { router } from "./routes/api.route"
import ratelimit from "express-rate-limit"


dotenv.config()

const app = express()
const PORT =  process.env.PORT
app.use(cors())

const limiter = ratelimit({
    windowMs : 10 * 60 * 1000,
    max : 5
})

app.use(limiter)
app.set('trust proxy', 1)

app.use("/api", router)

app.listen(PORT, ()=>{
    console.log(`The server is listening on ${PORT}`)
})

