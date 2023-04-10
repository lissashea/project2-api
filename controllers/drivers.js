// import Driver from "../models/Driver.js";

// export const getDrivers = async (req, res) => {
//   try {
//     const drivers = await Driver.find();
//     res.json(drivers);
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).json({ error: error.message });
//   }
// };

// export const getDriver = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const driver = await Driver.findById(id);
//     res.json(driver);
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).json({ error: error.message });
//   }
// };

// export const createDriver = async (req, res) => {
//   try {
//     const driver = new Driver(req.body);
//     await driver.save();
//     res.status(201).json(driver);
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).json({ error: error.message });
//   }
// };

// export const updateDriver = async (req, res) => {
//   const { id } = req.params;
//   const driver  = await Driver.findByIdAndUpdate(id, req.body);
//   res.status(200).json(driver);
// };

// export const deleteDriver = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const deleted = await Driver.findByIdAndDelete(id);
//     if (deleted) {
//       return res.status(200).send("Driver deleted successfully");
//     }
//     throw new Error("Driver not found");
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).json({ error: error.message });
//   }
// };
import Driver from "../models/Driver.js";
import Team from "../models/Team.js";

export const getDrivers = async (req, res, next) => {
  try {
    const drivers = await Driver.find();
    console.log("Drivers:", drivers);

    const teams = await Team.find();
    console.log("Teams:",teams);
    // Add up the points for each team
    for (const driver of drivers) {
      const team = teams.find((team) => team.id === driver.teamID);
      if (team) {
        for (const points of driver.pointsByYear) {
          team.points += points.points;
        }
      }
    }

    res.json(drivers);
  } catch (error) {
    next(error);
  }
};

export const getDriver = async (req, res, next) => {
  try {
    const { id } = req.params;
    const driver = await Driver.findById(id);
    if (!driver) {
      return res.status(404).json({ error: "Driver not found" });
    }
    res.json(driver);
  } catch (error) {
    next(error);
  }
};

export const createDriver = async (req, res, next) => {
  try {
    const driver = new Driver(req.body);
    const validationError = driver.validateSync();
    if (validationError) {
      throw new Error(validationError.message);
    }
    await driver.save();
    res.status(201).json(driver);
  } catch (error) {
    next(error);
  }
};

export const updateDriver = async (req, res, next) => {
  try {
    const { id } = req.params;
    const driver = await Driver.findByIdAndUpdate(id, req.body, {
      new: true, // Return the updated document
      runValidators: true, // Validate user input
    });
    if (!driver) {
      return res.status(404).json({ error: "Driver not found" });
    }
    res.status(200).json(driver);
  } catch (error) {
    next(error);
  }
};

export const deleteDriver = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await Driver.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ error: "Driver not found" });
    }
    res.status(200).send("Driver deleted successfully");
  } catch (error) {
    next(error);
  }
};

// Error handling middleware function
export const errorHandler = (error, req, res, next) => {
  console.error(error);
  res.status(500).json({ error: error.message });
};

