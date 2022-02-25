import express from "express";

import { sigin, sigup } from "../controllers/user.js";

const router = express.Router();

router.post("/sigin", sigin);
router.post("/sigup", sigup);

export default router;
