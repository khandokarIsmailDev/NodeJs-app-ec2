import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express()
const port = process.env.PORT

app.get('/',(req,res) =>{
    res.status(200).send(`Hello from nodejs app port ${port}`)
})

app.listen(port,()=>{
    console.log(`app running on http://localhost:${port}`)
})