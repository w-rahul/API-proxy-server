import axios from "axios"
import express  from "express"
import dotenv from "dotenv"
import url from "url"


dotenv.config()

export const router = express.Router()
const API_URL = process.env.API_URL
const API_KEY : string | any = process.env.API_KEY
const API_NAME : string | any = process.env.API_NAME 
console.log(API_NAME)

let cachedDATA :any
let cachedTime :any

router.get("/", async (req,res)=>{

    if(cachedTime && cachedTime > Date.now() - 30 * 1000 ){
        return res.status(200).json(cachedDATA)
    }

    try {
            const params = new URLSearchParams({
                [API_NAME] : API_KEY,
                ...url.parse(req.url, true).query
            })

        const response = await axios.get(`${API_URL}?${params}`)
        const data = response.data

        cachedDATA = data
        cachedTime  = Date.now()
        data.cachedTime = cachedTime
    
         return res.status(200).json({data})    
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message : "Something is up with our server"
        })
    } 
    
})