import { Tweet } from "@prisma/client";

export interface ITweetCreateData {
  username: string;
  tweetContent: string;
}

export class ITweetRepository {
  create: (data: ITweetCreateData) => Promise<Tweet>;
}
