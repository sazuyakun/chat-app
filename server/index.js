import express from 'express';
import * as dotenv from 'dotenv'

import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import connectMongo from './database/connectMongo.js';
import cookieParser from 'cookie-parser';

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;


app.use(express.json());  //parse incoming requests from req.body
app.use(cookieParser());

app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)

// app.get('/', (req, res) => {
//     res.send('Hello Urvi');
// })
app.listen(PORT, () => {
    connectMongo();
    console.log(`Server is running on port: ${PORT}`)
})
 