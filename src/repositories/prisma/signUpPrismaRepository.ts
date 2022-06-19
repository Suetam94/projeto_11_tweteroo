import { prisma } from "../../prisma";
import { ISignUpCreateData, ISignUpRepository } from "../signUpRepository";

export class SignUpPrismaRepository implements ISignUpRepository {
  async create({ username, avatar }: ISignUpCreateData) {
    return prisma.signUp.create({
      data: {
        username,
        avatar,
      },
    });
  }
}
