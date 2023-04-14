import express from "express";
import cors from "cors";
import logger from "morgan";
import chalk from "chalk";
import { connectDb } from "./db/connection.js";
import routes from "./routes/index.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`app listening on port ${PORT}`));

// set up middleware
app.use(express.json());
app.use(cors());
app.use(logger("dev"));

// connect to MongoDB
connectDb();

app.use("/", routes);
