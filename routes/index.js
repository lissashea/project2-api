import { Router } from "express";
import driversRoutes from "./drivers.js";
import teamsRoutes from "./teams.js";


const router = Router();

// router.get("/", (req, res) => res.send("This is the api root!"));

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