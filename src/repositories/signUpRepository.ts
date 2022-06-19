import { SignUp } from "@prisma/client";

export interface ISignUpCreateData {
  username: string;
  avatar: string;
}

export interface ISignUpRepository {
  create: (data: ISignUpCreateData) => Promise<SignUp>;
}
