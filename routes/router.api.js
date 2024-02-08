const express = require('express')
const router = express.Router()
const 
{
    getPerson,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson
} = require('../controllers/router.function')


router.get('/', getPerson)
router.post('/', createPerson)
router.post('/people', createPersonPostman)
router.put('/:id', updatePerson)
router.delete('/:id', deletePerson)

// syntactic sugar
// router.route('/').get(getPerson).post(createPerson)
// router.route('/people').post(createPersonPostman)
// router.route('/:id').put(updatePerson).delete(deletePerson)

module.exports = {router}