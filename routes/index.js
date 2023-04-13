import { Router } from "express";
import driversRoutes from "./drivers.js";
import teamsRoutes from "./teams.js";
import Driver from "../models/Driver.js"

const router = Router();


//Define a GET route for the root URL "/"
// Call Driver.find() to get all the drivers
// Send the drivers as a JSON response
// Mount the driversRoutes and teamsRoutes on the router using router.use()

router.get("/", async (req, res, next) => {
  try {
    const drivers = await Driver.find();
    res.json(drivers);
  } catch (err) {
    next(err);
  }
});

router.use("/drivers", driversRoutes);
router.use("/teams", teamsRoutes);

export default router;