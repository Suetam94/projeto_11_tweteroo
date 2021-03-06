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

  async getTweetsByUser(username: string): Promise<Tweet[]> {
    return prisma.tweet.findMany({
      where: {
        username,
      },
      orderBy: {
        createdAt: "desc",
      },
      include: {
        user: true,
      },
    });
  }

  async list(): Promise<Tweet[]> {
    return prisma.tweet.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        user: true,
      },
    });
  }
}
