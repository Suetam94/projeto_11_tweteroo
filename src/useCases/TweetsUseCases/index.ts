import { Tweet } from "@prisma/client";

import { TweetPrismaRepository } from "../../repositories/prisma/tweetPrismaRepository";

interface ITweetCreateDataUseCase {
  username: string;
  tweet: string;
}

interface ITweet {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  username: string;
  tweetContent: string;
  user: {
    id: number;
    username: string;
    avatar: string;
    createdAt: Date;
  };
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

  async getUserTweets(username: string) {
    if (!username) {
      throw new Error("Username is required");
    }

    return (await this.tweetRepository.getTweetsByUser(username)) as ITweet[];
  }

  async list() {
    const allTweets = (await this.tweetRepository.list()) as ITweet[];
    return allTweets.map((content) => {
      return {
        username: content.username,
        avatar: content.user.avatar,
        tweet: content.tweetContent,
      };
    });
  }
}
