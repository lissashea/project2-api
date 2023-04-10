const fs = require('fs');

const data1 = JSON.parse(fs.readFileSync('data_1.json', 'utf-8'));
const data2 = JSON.parse(fs.readFileSync('data_2.json', 'utf-8'));

const driver1 = data1.find(driver => driver.name === data2[0].name);
const driver2 = data2[0];

driver1.name = driver2.name;
driver1.team = driver2.team;
driver1.country = driver2.nationality;
driver1.age = driver2.age;

const pointsByYear = [];

for (let i = 0; i < Object.keys(driver2).length; i++) {
  const key = Object.keys(driver2)[i];
  if (key.startsWith('pointsByYear/')) {
    const index = key.split('/')[1];
    const year = driver2[`pointsByYear/${index}/year`];
    const points = driver2[`pointsByYear/${index}/points`];
    pointsByYear.push({ year: parseInt(year), points: parseInt(points) });
  }
}

driver1.pointsByYear = pointsByYear;
driver1.podiums = driver2.podiums;

fs.writeFileSync('data_1_updated.json', JSON.stringify(data1, null, 2));
console.log('Data update complete.');
