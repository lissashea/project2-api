import Team from "../models/Team.js";

//getTeams function: gets all teams from the database
export const getTeams = async (req, res) => {
  try {
    const teams = await Team.find();
    res.json(teams);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

//getTeamById function: gets a team with a specific ID from the database (1-10)
export const getTeamById = async (req, res) => {
  try {
    const team = await Team.findOne({ teamID: parseInt(req.params.teamId) });
    res.json(team);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

//getTeamById function: gets a team with a teamObject unique ID
export const getTeamByObjectId = async (req, res) => {
  try {
    const team = await Team.findById(req.params.teamObjectId);
    res.json(team);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};
//createTeam function: creates a new team in the database
export const createTeam = async (req, res) => {
  try {
    const team = new Team(req.body);
    await team.save();
    res.status(201).json(team);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

//updateTeam function: updates an existing team with a specific ID in the database
export const updateTeam = async (req, res) => {
  const { id } = req.params;
  const team = await Team.findByIdAndUpdate(id, req.body);
  res.status(200).json(team);
};

//deleteTeam function: deletes a team with a specific ID from the database
export const deleteTeam = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Team.findByIdAndDelete(id);

    if (deleted) {
      return res.status(200).send("Team Deleted!");
    }

    throw new Error("Team not found");
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

// Error handling middleware function
export const errorHandler = (error, req, res) => {
  console.error(error);
  res.status(500).json({ error: error.message });
};