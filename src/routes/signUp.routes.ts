import { Router } from "express";

import { SignUpController } from "../controllers/SignUpController";

const signUpRoutes = Router();

const signUpController = new SignUpController();

signUpRoutes.post("/", (req, res, next) =>
  signUpController.create(req, res, next)
);

export { signUpRoutes };
