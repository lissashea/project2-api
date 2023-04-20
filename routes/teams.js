
import { Router } from "express";
import * as controllers from "../controllers/teams.js";

const router = Router();


router.get("/", controllers.getTeams);
router.get("/team/id/:teamObjectId", controllers.getTeamByObjectId);
router.get("/team/:teamId", controllers.getTeamById);
router.post("/", controllers.createTeam);
router.put("/:id", controllers.updateTeam);
router.delete("/:id", controllers.deleteTeam);
router.get("/points-by-year", controllers.getTeamPointsByYear);


export default router;