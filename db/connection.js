import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGO_URL || "mongodb://localhost:27017/formula1";

mongoose.set("returnOriginal", false);

const mongooseConfig = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose.connect(MONGODB_URI, mongooseConfig)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log("Error connecting to MongoDB:", error));

mongoose.connection.on("disconnected", () => console.log("Disconnected from MongoDB"));

mongoose.connection.on("error", (error) => console.error(`MongoDB connection error: ${error}`));

export default mongoose.connection;
