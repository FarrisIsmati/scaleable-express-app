const heartsRouter = require('express').Router();

heartsRouter.get('/', (req, res) => {
  res.status(200).json({res: 'OK'});
});

module.exports = heartsRouter;
