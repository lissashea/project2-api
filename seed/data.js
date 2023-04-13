import db from "../db/connection.js";
import Team from "../models/Team.js";
import Driver from "../models/Driver.js";
import teams from "./teams.json" assert { type: "json" };
import drivers from "./drivers.json" assert { type: "json" };

const insertData = async () => {
  try {
    // Reset Database
    await db.dropDatabase();

    // Insert Drivers & Teams into the Database
    await Driver.insertMany(drivers);
    await Team.insertMany(teams);

    // Close DB connection
    await db.close();
  } catch (error) {
    console.error(error);
  }
};

export default insertData();