# API Boilerplate

 The project provides a starting point for building RESTful API. The API is for a Formula 1 racing database. The application uses Node.js with the Express.js framework and MongoDB as the database. The project contains routes for drivers and teams data and uses Mongoose as an Object Data Modeling (ODM) library to interact with the MongoDB database.Overall, this project provides a simple RESTful API to access and manipulate driver and team data for Formula 1 racing.

### Data Model
The database for this project is built using MongoDB and Mongoose, and contains two collections: "drivers" and "teams". Here are the schemas for each collection:

### Driver Schema
| Field          | Type    | Description                                   |
| -------------- | ------- | --------------------------------------------- |
| name           | String  | The name of the driver                        |
| nationality    | String  | The driver's nationality                      |
| team           | String  | The team the driver belongs to                 |
| officialNumber | Number  | The driver's official race number             |
| podiums        | Number  | The number of podiums the driver has achieved |
| pointsByYear   | Array   | An array of objects representing the driver's points by year |
| image          | String  | A URL pointing to an image of the driver       |


### Team Schema
| Field          | Type    | Description                                               |
| -------------- | ------- | --------------------------------------------------------- |
| teamName       | String  | The name of the team                                      |
| teamID         | Number  | The team's unique ID                                      |
| previousNames  | Array   | An array of strings representing the team's previous names |
| principal      | String  | The team's principal                                      |
| owner          | String  | The team's owner                                          |
| engine         | String  | The make of the team's engine                             |
| country        | String  | The country where the team is based                        |
| championships  | Number  | The number of championships the team has won               |
| teamLogo       | String  | A URL pointing to an image of the team logo                 |
| pointsByYear   | Array   | An array of objects representing the team's points by year |


### Installation
Make sure you have Node.js and npm installed on your machine.
1. Clone this repository to your local machine.
2. Navigate to the root directory of the project in your terminal.
3. Run the command `npm install` to install all dependencies listed in the `package.json` file.
4. Create a `.env` file at the root of the project and set your environment variables.
5. To run the project, use the command `npm start`.
6. To run the project in development mode with hot reloading, use the command `npm run dev`.
7. To deploy the database with data, run the command `railway run npm run db:seed`.

Note: It's important to make sure you have all the dependencies listed in the `package.json` file installed and correctly configured before running the project.

## API Routes
/drivers
- GET /: Returns a list of all drivers.
- GET /driver/id/:driverId: Returns a single driver by driverId (driver offical number not objectID)
- GET /driver/firstname/:firstName: Returns a single driver by first name.
- POST drivers/ Creates a new driver.
- PUT /:id: Updates an existing driver.
- DELETE /:driverId: Deletes a driver by driverId.
- GET driver/driver-without-team pulls only driver information no nested team.

/teams
- GET /: Returns a list of all teams.
- GET /team/id/:teamId: Returns a single team by teamId.
- POST /: Creates a new team.
- PUT /:id: Updates an existing team.
- DELETE /:id: Deletes a team by teamId.
- GET /points-by-year gets points by year for all teams.

Note that all routes return data in JSON format.

## Deployment
To deploy the application to a live server, you can use a hosting platform like Railway. Follow these steps:
1. Clone the repository to your local machine.
2. Set up a MongoDB Atlas account and create a new database. Update the MONGO_URL environment variable in .env with your database connection string.
3. Install the required dependencies by running npm install.
4. Seed the database by running npm run db:seed.
5. Start the server by running npm run dev
6. The API is now running on http://localhost:3000.
7. The application is also deployed to a domain in Railway at https://saucy-turkey-production.up.railway.app. You can access the deployed API by making HTTP requests to this URL.
