class TweetsController {
  create(req, res, next) {
    return res.send("chegou nos tweets criar");
  }

  list(req, res, next) {
    return res.send("chegou nos tweets listar");
  }
}

export { TweetsController };
