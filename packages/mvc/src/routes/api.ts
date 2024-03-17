import express from "express";
// import { authenticateUser } from "../auth";
import profileRouter from "./profiles";
import postsRouter from "./posts";
const router = express.Router();

// all routes under this router require authentication
// router.use(authenticateUser);
router.use("/profiles", profileRouter);
router.use("/posts", postsRouter);

export default router;
