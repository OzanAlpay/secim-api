const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ElectionResultSchema = new Schema({
  id: { type: Number },
  name: { type: String },
  isMetropolitan: { type: Boolean },
  results: { type: Array }
})

ElectionResultSchema.virtual('url').get(function () {
  return '/electionresults/' + this.id
})

ElectionResultSchema.virtual('name_url').get(function () {
  return '/electionresults/' + this.name
})

module.exports = mongoose.model('election_result', ElectionResultSchema)