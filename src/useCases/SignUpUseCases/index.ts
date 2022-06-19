import { SignUp } from "@prisma/client";

import { SignUpPrismaRepository } from "../../repositories/prisma/signUpPrismaRepository";
import { ISignUpCreateData } from "../../repositories/signUpRepository";

export class SignUpUseCases {
  constructor(private signUpRepository: SignUpPrismaRepository) {}
  async create({ username, avatar }: ISignUpCreateData): Promise<SignUp> {
    if (!username) {
      throw new Error("Username is required");
    }

    if (!avatar) {
      throw new Error("Avatar image is required");
    }

    return this.signUpRepository.create({ username, avatar });
  }
}
