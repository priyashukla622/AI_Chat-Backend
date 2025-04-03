import express from "express";
import signup from "../controllers/signup.js";

import login from "../controllers/login.js";
import getHistory from "../controllers/getHistory.js";
import history from "../controllers/addHistory.js";
import authMiddleware from "../middleware/auth.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login",login)
// router.post("/saveHistory", history)
router.post("/saveHistory", authMiddleware, history);
router.get("/getHistory",authMiddleware, getHistory)
export default router;