import { Tweet } from "@prisma/client";

import { TweetPrismaRepository } from "../../repositories/prisma/tweetPrismaRepository";

interface ITweetCreateDataUseCase {
  username: string;
  tweet: string;
}

export class TweetsUseCases {
  constructor(private tweetRepository: TweetPrismaRepository) {}
  create({ username, tweet }: ITweetCreateDataUseCase): Promise<Tweet> {
    if (!username) {
      throw new Error("Username is required");
    }
    if (!tweet) {
      throw new Error("Tweet content is required");
    }

    return this.tweetRepository.create({ username, tweetContent: tweet });
  }
}
