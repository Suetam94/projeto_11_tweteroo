import { SignUpPrismaRepository } from "../repositories/prisma/signUpPrismaRepository";
import { ISignUpRepository } from "../repositories/signUpRepository";
import { SignUpUseCases } from "../useCases/SignUpUseCases";

class SignUpController {
  private readonly signUpRepository;
  private signUpUseCases: ISignUpRepository;

  constructor() {
    this.signUpRepository = new SignUpPrismaRepository();
    this.signUpUseCases = new SignUpUseCases(this.signUpRepository);
  }

  async create(req, res, next) {
    const { username, avatar } = req.body;

    try {
      const newSignUp = await this.signUpUseCases.create({ username, avatar });

      return res.status(201).json(newSignUp).send();
    } catch (e) {
      return next(e);
    }
  }
}

export { SignUpController };
