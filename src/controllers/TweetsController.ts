import { TweetPrismaRepository } from "../repositories/prisma/tweetPrismaRepository";
import { TweetsUseCases } from "../useCases/TweetsUseCases";

class TweetsController {
  private readonly tweetsRepository;
  private tweetsUseCases: TweetsUseCases;

  constructor() {
    this.tweetsRepository = new TweetPrismaRepository();
    this.tweetsUseCases = new TweetsUseCases(this.tweetsRepository);
  }

  async create(req, res, next) {
    const { username, tweet } = req.body;

    try {
      const newTweet = await this.tweetsUseCases.create({
        username,
        tweet,
      });

      return res.status(201).json(newTweet).send();
    } catch (e) {
      return next(e);
    }
  }

  async getUserTweets(req, res, next) {
    const { USERNAME } = req.params;

    try {
      const userTweets = await this.tweetsUseCases.getUserTweets(USERNAME);

      return res.status(200).json(userTweets).send();
    } catch (e) {
      return next(e);
    }
  }

  async list(req, res, next) {
    try {
      const tweets = await this.tweetsUseCases.list();

      return res.status(200).json(tweets).send();
    } catch (e) {
      return next(e);
    }
  }
}

export { TweetsController };
