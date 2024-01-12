const express = require('express');
const app = express();
require('dotenv').config()
const port = process.env.PORT;
const connectDB = require('./src/db/connectionDB')
const userRoutes = require('./src/route/userRoute');


app.use('/api', userRoutes)



app.listen(port, () => {
    connectDB(process.env.DATABASE_URL)
    console.log(`server is connected http://localhost:${port}`)
}) 