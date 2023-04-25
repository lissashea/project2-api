import Team from '../models/Team.js';
import teamData from './teams.json' assert { type: "json" };
import Driver from '../models/Driver.js';
import driverData from './drivers.json' assert { type: "json" };

export const seedTeams = async () => {
  try {
    const teams = teamData.map((team) => ({
      teamName: team.teamName,
      teamID: team.teamID,
      previousNames: team.previousNames,
      principal: team.principal,
      owner: team.owner,
      engine: team.engine,
      country: team.country,
      championships: team.championships,
      teamPointsByYear: team.teamPointsByYear,
      teamLogo: team.teamLogo

    }));
    await Team.deleteMany({});
    await Team.create(teams);
    console.log('Team collection seeded!');
    return teams;
  } catch (error) {
    console.log('Error seeding Team collection:', error);
  }
};

export const seedDrivers = async (teams) => {
  const drivers = driverData.map((driver) => ({
    name: driver.name,
    nationality: driver.nationality,
    team: driver.team,
    officialNumber: driver.officialNumber,
    podiums: driver.podiums,
    wins: driver.wins,
    image: driver.image,
    pointsByYear: driver.pointsByYear
  }));
  try {
    await Driver.deleteMany({});
    await Driver.create(drivers);
    console.log("Driver collection seeded!");
  } catch (error) {
    console.log("Error seeding Driver collection:", error);
  }
};

