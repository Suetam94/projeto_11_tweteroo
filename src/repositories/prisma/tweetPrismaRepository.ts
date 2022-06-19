import { Tweet } from "@prisma/client";

import { prisma } from "../../prisma";
import { ITweetCreateData, ITweetRepository } from "../tweetRepository";

export class TweetPrismaRepository implements ITweetRepository {
  async create({ username, tweetContent }: ITweetCreateData): Promise<Tweet> {
    return prisma.tweet.create({
      data: {
        username,
        tweetContent,
      },
    });
  }
}
