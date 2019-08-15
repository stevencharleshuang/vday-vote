const model = require('../models/model');

module.exports = {
  getVotes(req, res, next) {
    model.findVotes()
      .then(votes => {
        console.log(votes);
        res.locals.votes = votes;
        next();
      })
      .catch(err => {
        console.log('I am error: ', err);
        next(err);
      })
  }
}