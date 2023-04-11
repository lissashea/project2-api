import db from "./db/connection.js";
import routes from "./routes/index.js";

import express from "express";
import cors from "cors";
import logger from "morgan";
import chalk from "chalk";

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`app listening on port ${PORT}`));

// set up middleware
app.use(express.json());
app.use(cors());
app.use(logger("dev"));

app.use("/api", routes);

db.on("connected", () => {
    console.clear()
    console.log(chalk.blue("connected to Mongodb"))
})