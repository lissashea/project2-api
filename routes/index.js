import { Router } from "express";
import driversRoutes from "./drivers.js";
import teamsRoutes from "./teams.js";


const router = Router();

router.get("/", (req, res) => res.send("This is the api root!"));

router.use("/drivers", driversRoutes);
router.use("/teams", teamsRoutes);

export default router;