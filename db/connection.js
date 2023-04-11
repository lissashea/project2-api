import mongoose from "mongoose";
import chalk from "chalk";

const MONGODB_URI =
process.env.MONGO_URL  || "mongodb://127.0.0.1:27017/formula1";

// This is for Model.findByIdAndUpdate method, specifically so that {new: true} is the default
mongoose.connect(MONGODB_URI, mongooseConfig)

mongoose.set("returnOriginal", false);

mongoose
  .connect(MONGODB_URI)
  .catch((error) =>
    console.log("Error connecting to MongoDB: ", error.message)
  );

mongoose.connection.on("disconnected", () =>
  console.log(chalk.bold("Disconnected from MongoDB!"))
);

mongoose.connection.on("error", (error) =>
  console.error(chalk.red(`MongoDB connection error: ${error}`))
);

export default mongoose.connection;