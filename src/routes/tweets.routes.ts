import { Router } from "express";

import { TweetsController } from "../controllers/TweetsController";

const tweetRoutes = Router();

const tweetsController = new TweetsController();

tweetRoutes.post("/", (req, res, next) =>
  tweetsController.create(req, res, next)
);
tweetRoutes.get("/", (req, res, next) => tweetsController.list(req, res, next));

export { tweetRoutes };
