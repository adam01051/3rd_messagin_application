import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { getUsersForSidebar, sendMessages } from "../controllers/message.controller.js";
import { getMessages } from "../controllers/message.controller.js";

const router = express.Router();


router.get("/user",protectRoute, getUsersForSidebar);


router.get("/:id", protectRoute, getMessages);

router.post("/send/:id", protectRoute, sendMessages);

export default router;