import db from "../db/connection.js";

import Team from "../models/Team.js";
import Driver from "../models/Driver.js";
import teams from "./teams.json" assert { type: "json" };
import drivers from "./drivers.json" assert { type: "json" };

// Import your models and data here

const populateDrivers = async (teams) => {
  try {
    // Populate the team.pointsByYear.team field in all Driver documents
    const populatedDrivers = await Driver.find({})
      .populate({ path: 'team.pointsByYear.team', model: Team })
      .exec();

    // Update the team field in the drivers array with the populated team data
    const driversWithPopulatedTeam = populatedDrivers.map((driver) => ({
      ...driver._doc,
      team: teams.find((team) => String(team._id) === String(driver.team._id)),
    }));

    // Insert the updated drivers array into the database
    await Driver.insertMany(driversWithPopulatedTeam);
  } catch (error) {
    console.error(error);
  }
};

const insertData = async () => {
  try {
    // Reset Database
    await db.dropDatabase();

    // Insert Teams into the Database
    await Team.insertMany(teams);

    // Populate Drivers with corresponding Teams and insert into the Database
    await populateDrivers(teams);

    // Close DB connection
    await db.close();
  } catch (error) {
    console.error(error);
  }
};

insertData();
