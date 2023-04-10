// import db from "../db/connection.js";
// import Team from "../models/Team.js";
// import Driver from "../models/Driver.js";
// import teams from "./teams.json" assert { type: "json" };
// import drivers from "./drivers.json" assert { type: "json" };

// const insertData = async () => {
//   // Reset Database
//   await db.dropDatabase();
//   // Insert Characters into the Database
//   await Driver.insertMany(drivers);
//   // Insert Houses into the Database
//   await Team.insertMany(teams);
//   // Close DB connection
//   db.close();
// };

// insertData();
import db from "../db/connection.js";
import Team from "../models/Team.js";
import Driver from "../models/Driver.js";
import teams from "./teams.json" assert { type: "json" };
import drivers from "./drivers.json" assert { type: "json" };

const insertData = async () => {
  try {
    // Reset Database
    await db.dropDatabase();

    // Insert Drivers into the Database
    await Driver.insertMany(drivers);

    // Insert Teams into the Database
    await Team.insertMany(teams);

    // Close DB connection
    await db.close();
  } catch (error) {
    console.error(error);
  }
};

insertData();
