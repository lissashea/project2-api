import { Router } from "express";
import driversRoutes from "./drivers.js";
import teamsRoutes from "./teams.js";
import Driver from "../models/Driver.js"

const router = Router();

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