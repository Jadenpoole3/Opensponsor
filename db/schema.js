const mongoose = require('mongoose')

const Schema = mongoose.Schema

const AthleteSchema = new Schema({
  name: String,
  description: String,
  nationality: String,
  gender: String,
  image: String,
  sport: String,
})



const Athlete = mongoose.model('Athlete', AthleteSchema)


module.exports = {
  Athlete
}