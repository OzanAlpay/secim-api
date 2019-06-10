const express = require('express')
const router = express.Router();


const electionResultController = require('../controller/electionResultController')



router.get('/', electionResultController.index)
router.get('/:id', electionResultController.city_result)

module.exports = router;