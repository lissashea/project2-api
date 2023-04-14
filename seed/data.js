import db from "../db/connection.js";
import { seedTeams, seedDrivers } from "./seed.js";

const updateData = async () => {
  let teams = await db.collection('teams').find({}).toArray();
  teams.forEach(async (team) => {
    await db.collection('drivers').updateMany(
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

