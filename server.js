import express from "express";
import cors from "cors";
import logger from "morgan";
import chalk from "chalk";
import routes from "./routes/index.js";
import mongoose from "mongoose"
// import { Team } from "./models/Team.js";
// import { Driver } from "./models/Driver.js";


const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGO_URL || "mongodb://localhost:27017/formula1";

app.listen(PORT, () => console.log(`app listening on port ${PORT}`));

// set up middleware
app.use(express.json());
app.use(cors());
app.use(logger("dev"));

// connect to MongoDB
mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(chalk.blue("connected to MongoDB"));
  })
  .catch((error) => {
    console.log(chalk.red("Error connecting to MongoDB:", error));
  });

app.use("/", routes);
