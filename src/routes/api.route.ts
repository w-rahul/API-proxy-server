import axios from "axios"
import express  from "express"

export const router = express.Router()
const API_URL = process.env.API_URL
const API_KEY = process.env.API_KEY
const API_NAME = process.env.API_NAME

router.get("/api", async (req,res)=>{
    try {
        const response = await axios.get(`${API_URL}`)
        const data = response.data
    
         return res.status(200).json({
            data
         })    
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message : "Something is up with our server"
        })
    } 
    
})












