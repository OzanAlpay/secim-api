const electionResult = require('../models/election_result')


exports.index = function (req, res) {
  electionResult.find({}, function (err, result) {
    if (err) { return next(err) }
    if (result.length == 0) {
      return res.status(404).send({ error: "Couldn't find any results!" })
    }
    return res.json(result)
  })
}

exports.city_result = function (req, res) {
  electionResult.find({ 'id': req.params.id }, function (err, result) {
    if (err) { return next(err) }
    if (result.length == 0) {
      return res.status(404).send({ error: "City is not found!" })
    }
    return res.json(result)
  })
}