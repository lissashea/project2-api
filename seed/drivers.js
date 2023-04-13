import Driver from '../models/Driver.js'
import driverData from './drivers.json'

const seedDrivers = () => {
  const drivers = driverData.map((driver) => ({
    name: driver.name,
    nationality: driver.nationality,
    team: driver.team,
    officialNumber: driver.officialNumber,
    podiums: driver.podiums,
    pointsByYear: driver.pointsByYear,
    image: driver.image
  }));

  return Driver.deleteMany({})
    .then(() => Driver.create(drivers))
    .then(() => console.log("Driver collection seeded!"))
    .catch((error) => console.log("Error seeding Driver collection:", error));
};

module.exports = seedDrivers;
