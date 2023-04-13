import Driver from "../models/Driver.js";

export const getDrivers = async (req, res) => {
  try {
    const drivers = await Driver.find();
    res.json(drivers);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const getDriverById = async (req, res) => {
  try {
    const driver = await Driver.findOne({ driverId: req.params.driverId });
    res.json(driver);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const getDriverByFirstName = async (req, res) => {
  try {
    const driver = await Driver.findOne({ name: { $regex: new RegExp("^" + req.params.firstName, "i") } });
    res.json(driver);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const createDriver = async (req, res) => {
  try {
    const driver = new Driver(req.body);
    await driver.save();
    res.status(201).json(driver);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const updateDriver = async (req, res) => {
  const { id } = req.params;
  const driver = await Driver.findByIdAndUpdate(id, req.body);
  res.status(200).json(team);
};

export const deleteDriverById = async (req, res) => {
  try {
    const { driverId } = req.params;
    const deleted = await Driver.findByIdAndDelete(driverId);

    if (deleted) {
      return res.status(200).send("Driver Deleted!");
    }

    throw new Error("Driver not found");
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
