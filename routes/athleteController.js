const express = require('express')
const router = express.Router()
const {Athlete} = require('../db/schema')

router.get('/',  async (req,res)=> {
    try {
        const athletes = await Athlete.find({})
        res.json(athletes)
        
    } catch (err) {
        res.send(err)
    }
   

})
// 
router.get('/:id', async (req,res) => {
    try {
        const athlete = await Athlete.findById(req.params.id)
        res.json(athlete)
    } catch (err) {
        res.send(err)
    }
    
})


//Create
router.post('/', async (req, res) => {
    try {
        const newAthlete = new Athlete (req.body.athlete)
        const saved = await newAthlete.save()
        res.json(saved)

    } catch (err) {
        res.send(err)
    }
})

router.patch('/:id', async (req, res) => {
    try{
        const updatedAthlete = req.body.athlete
        const athleteId = req.params.id
        const athlete = await Athlete.findByIdAndUpdate(athleteId, updatedAthlete, {new: true})
        res.json(athlete) 
    } catch (err) {
        console.log(err)
        res.send(err)
    }
})

//Delete Route
router.delete('/:id', async (req, res) => {
    try {
        const athleteId = req.params.id;
        const deleted = await User.findByIdAndRemove(athleteId)
        res.json(deleted)
    }
    catch (err) {
        res.send(err)
    }
})

module.exports = router