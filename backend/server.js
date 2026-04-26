const express=require('express');
const dotenv=require('dotenv').config();
const cors=require('cors');
const app=express()
app.use(cors());
app.use(express.json());
const routess=require('./routes/authroutes');
app.use('/',routess);


const PORT=process.env.PORT||7000
app.listen(PORT,()=>{
     console.log(`http://localhost:${PORT}`);
})
