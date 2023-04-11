import db from "../db/connection.js";
import Team from "../models/Team.js";
import Driver from "../models/Driver.js";
import teams from "./teams.json" assert { type: "json" };
import drivers from "./drivers.json" assert { type: "json" };

let driverData = drivers.map(item => {
  return {
  name: item.name,
  team: item.team,
  podiums: item.podiums,
  credit: item.copyright,
  pointsByYear: item.pointsByYear[0],
  image: item.image
  }
});

let teamData = teams.map(item => {
  return {
    teamName: item.teamName,
    owner: item.owner,
    principal: item.principal,
    engine: item.engine,
    championships: item.championships,
    pointsByYear: item.pointsByYear[0],
    seasons: item.seasons[0]
  }
});

const insertData = async () => {
  try {
    // Reset Database
    await db.dropDatabase();

    // Insert Drivers & Teams into the Database
    await Team.insertMany(teamData);
    await Driver.insertMany(driverData);

    // Close DB connection
    await db.close();
  } catch (error) {
    console.error(error);
  }
};

export default insertData();
