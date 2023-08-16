require ("dotenv").config();
const express = require('express');
const app = express();
const connectDB = require('./db/connect')
const  PORT = process.env.PORT || 5000;

const products_routes = require('./routes/route')

app.get('/',(req,res)=>{
    res.send("its live");
})

//middleware or start router
app.use('/api/products',products_routes)


const run = async()=>{
    try {
        await connectDB();
        app.listen(PORT,()=>{
           console.log(`${PORT} connected`);
        })
    } catch (error) {
    console.log(error);        
    }
}
run()