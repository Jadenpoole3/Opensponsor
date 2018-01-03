require('dotenv').config()
const mongoose = require('mongoose')
const { Athlete } = require('./schema')

mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_URI)

const db = mongoose.connection

const saved = async () => {
  await Athlete.remove()
  const lebron = new Athlete({name: 'Lebron James', description: 'Basketball player', nationality: 'Black', gender: 'Male', image: 'http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1966.png&w=350&h=254', sport: 'Basketball'})
  await lebron.save()
  const derek = new Athlete({name: 'Derek Jeter', description: 'Baseball Player', nationality: 'Mixed', gender: 'Male', image: 'http://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/3246.png&w=350&h=254', sport: 'Baseball'})
  await derek.save()
  db.close()
}

saved()