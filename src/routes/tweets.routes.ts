import { Router } from "express";

const tweetRoutes = Router();

tweetRoutes.get("/", (req, res, next) => res.send("rota de tweets"));

export { tweetRoutes };
