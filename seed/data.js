import db from "../db/connection.js";
import { seedTeams, seedDrivers } from "./seed.js";

import Team from "../models/Team.js" 
import Driver from "../models/Driver.js" 

const updateData = async () => {
  let teams = await Team.find({}, {maxTimeMS: 30000});
  teams.forEach(async (team) => {
    await Driver.updateMany(
      { team: team.teamName },
      { $set: { team: team } }
    );
  });
};

// Call seedTeams and seedDrivers to seed the database with data first
await seedTeams();
await seedDrivers();

// Call updateData to update the Driver documents
await updateData();
