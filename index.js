import express from "express";
import mongoose from "./src/db/dbConnect.js";
import helmet from "helmet";
import 'dotenv/config'
import router from "./src/routes/index.js";

const app = express();

app.use(helmet())

mongoose.connection.on("open", () => {
    console.log("MongoDB is connected");
    
})
mongoose.connection.on("error", (error) => {
    console.log("MongoDB is not connected", error);
})

app.get('/',(req,res)=>{
   res.send("Hello World")
})

app.use('/api', router);

app.listen(process.env.PORT, () => {
    console.log("server running");
})