import { Router } from "express";
import * as controllers from "../controllers/drivers.js";

const router = Router();

router.get("/", controllers.getDrivers);
router.get("/:id", controllers.getDriver);
router.post("/", controllers.createDriver);
router.put("/:id", controllers.updateDriver);
router.delete("/:id", controllers.deleteDriver);

export default router;