import express from "express";
import mongoose from "./src/db/dbConnect.js";
import helmet from "helmet";
import 'dotenv/config'
import router from "./src/routes/index.js";
import chalk from "chalk";

const app = express();

app.use(helmet())
app.use(express.json());

mongoose.connection.on("open", () => {
    console.log(chalk.green.bgWhite("MongoDB is connected")); // error ya message colorful banane ke liye hum chalk library use krte hain

})
mongoose.connection.on("error", (error) => {
    console.log("MongoDB is not connected", error);
})

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.use('/api', router);

app.listen(process.env.PORT, () => {
    console.log("server running");
})