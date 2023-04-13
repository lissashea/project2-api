import mongoose from '../../db/connection.js';
import seedDrivers from './seed/drivers.js';
import seedTeams from './seed/teams.js';

import Team from "../models/Team.js";
import Driver from "../models/Driver.js";

import teams from "./teams.json" assert { type: "json" };
import drivers from "./drivers.json" assert { type: "json" };

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB!");

  Promise.all([seedDrivers(), seedTeams()])
    .then(() => mongoose.disconnect())
    .catch((error) => console.log("Error seeding collections:", error));
});
