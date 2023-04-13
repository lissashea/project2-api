import Team from '../models/Team.js';
import teamData from './teams.json';

const seedTeams = async () => {
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
      teamLogo: team.teamLogo,
      pointsByYear: team.pointsByYear
    }));

    await Team.deleteMany({});
    await Team.create(teams);
    console.log('Team collection seeded!');
  } catch (error) {
    console.log('Error seeding Team collection:', error);
  }
};

export default seedTeams;

