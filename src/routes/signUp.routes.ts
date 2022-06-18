import { Router } from "express";

const signUpRoutes = Router();

signUpRoutes.get("/", (req, res, next) => res.send("rota de signup"));

export { signUpRoutes };
