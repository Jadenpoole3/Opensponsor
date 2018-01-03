const express = require('express')
const router = express.Router()

const Schema = require('../db/schema.js')
const { Athlete } = Schema



//get all the athletes  index Route 
router.get('/', async (req, res) => {
    try {
      const athletes = await Athlete.find({})
      res.json(athletes)
    } catch (err) {
      console.log(err)
    }
  })

  //Show Route 
  router.get('/:id', async (req, res) => {
    try {
      const athleteId = req.params.id
      const athlete = await Athlete.findById(athleteId)
      res.json(athlete)
    } catch (err) {
      console.log(err)
      res.json(err)
    }
  })

// Create Route 
  router.post('/', async (req, res) => {
    try {
      const newAthlete = req.body
      const savedAthlete = await Athlete.create(newAthlete)
      res.json(savedAthlete)
    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  })

  //Update Route
  router.put('/:id', async (req, res) => {
    try {
      const athleteId = req.params.id
      const updatedAthlete = req.body
      const savedAthlete = await Athlete.findByIdAndUpdate(athleteId, updatedAthlete)
      res.json(savedAthlete)
    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  })

  // Delete Route
  router.delete('/:id', async (req, res) => {
    try {
      const athleteId = req.params.id
      await Athlete.findByIdAndRemove(athleteId)
      res.json({
        msg: 'Successfully Deleted'
      })
    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  })



  module.exports = router