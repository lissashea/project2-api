import db from "../db/connection.js";
import Team from "../models/Team.js";
import Driver from "../models/Driver.js";
import teams from "./teams" assert { type: "json" };
import drivers from "./drivers" assert { type: "json" };

const insertData = async () => {
  try {
    // Connect to the database
    await db.connect();

    // Insert Teams into the Database
    const insertedTeams = await Team.insertMany(teams);
    console.log(`Inserted ${insertedTeams.length} teams`);

    // Insert Drivers into the Database
    for (let driver of drivers) {
      const team = insertedTeams.find((t) => t.teamName === driver.team);
      driver.team = team._id;
      await Driver.create(driver);
    }
    console.log(`Inserted ${drivers.length} drivers`);

    // Close the database connection
    await db.disconnect();
  } catch (error) {
    console.error(error);
  }
};

insertData();

export default insertData;
