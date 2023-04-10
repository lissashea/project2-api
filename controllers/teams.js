// import Team from "../models/Team.js";

// export const getTeams = async (req, res) => {
//   try {
//     const teams = await Team.find();
//     res.json(teams);
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).json({ error: error.message });
//   }
// };

// export const getTeam = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const team = await Team.findById(id);
//     res.json(team);
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).json({ error: error.message });
//   }
// };

// export const createTeam = async (req, res) => {
//   try {
//     const team = new Team(req.body);
//     await team.save();
//     res.status(201).json(team);
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).json({ error: error.message });
//   }
// };

// export const updateTeam = async (req, res) => {
//   const { id } = req.params;
//   const team = await Team.findByIdAndUpdate(id, req.body);
//   res.status(200).json(team);
// };

// export const deleteTeam = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const deleted = await Team.findByIdAndDelete(id);
//     if (deleted) {
//       return res.status(200).send("Team deleted successfully");
//     }
//     throw new Error("Team not found");
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).json({ error: error.message });
//   }
// };

import Team from "../models/Team.js";

export const getTeams = async (req, res, next) => {
  try {
    const teams = await Team.find();
    res.json(teams);
  } catch (error) {
    next(error);
  }
};

export const getTeam = async (req, res,) => {
  try {
    const { id } = req.params;
    const team = await Team.findById(id);
    if (!team) {
      return res.status(404).json({ error: "Team not found" });
    }
    res.json(team);
  } catch (error) {
    next(error);
  }
};

export const createTeam = async (req, res) => {
  try {
    const team = new Team(req.body);
    await team.save();
    res.status(201).json(team);
  } catch (error) {
    next(error);
  }
};

export const updateTeam = async (req, res) => {
  try {
    const { id } = req.params;
    const team = await Team.findByIdAndUpdate(id, req.body, {
      new: true, // Return the updated document
      runValidators: true, // Validate user input
    });
    if (!team) {
      return res.status(404).json({ error: "Team not found" });
    }
    res.status(200).json(team);
  } catch (error) {
    next(error);
  }
};

export const deleteTeam = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Team.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ error: "Team not found" });
    }
    res.status(200).send("Team deleted successfully");
  } catch (error) {
    next(error);
  }
};

// Error handling middleware function
export const errorHandler = (error, req, res) => {
  console.error(error);
  res.status(500).json({ error: error.message });
};
