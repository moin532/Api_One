const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false)
        mongoose.connect("mongodb://0.0.0.0:27017/ecommerse",{
         keepAlive: true,
        useNewUrlParser: true,
        useUnifiedTopology: true

        }) 
        console.log('Mongo connected')
        
    } catch(error) {
        console.log(error)
        process.exit()
    }
}

module.exports = connectDB