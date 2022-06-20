import { Router } from "express";

import { signUpRoutes } from "./signUp.routes";
import { tweetRoutes } from "./tweets.routes";

const routes = Router();

routes.use("/sign-up", signUpRoutes);
routes.use("/tweets", tweetRoutes);

export default routes;
