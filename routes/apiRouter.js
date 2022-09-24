const express = require('express')
const router = express.Router()

// const { authValidator } = require('../src/validator/auth/authValidator')

router.get('/', (req,res) => {
    res.send('hi')
})

module.exports = router
