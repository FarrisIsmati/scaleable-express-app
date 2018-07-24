const logger = require('../logger/index');

module.exports = (req, res, next) => {
  logger.error('404 page requested');
  res.status(404).json({'res': 'Not Found'});
}
