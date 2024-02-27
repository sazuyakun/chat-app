import express from 'express';
import * as dotenv from 'dotenv'
import authRoutes from "./routes/auth.routes.js"
import connectMongo from './database/connectMongo.js';

const app = express();

dotenv.config();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Hello Urvi');
})

app.use("/api/auth", authRoutes)

app.listen(PORT, () => {
    connectMongo();
    console.log(`Server is running on port: ${PORT}`)
})
 