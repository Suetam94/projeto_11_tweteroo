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

  list(req, res, next) {
    return res.send("chegou nos tweets listar");
  }
}

export { TweetsController };
