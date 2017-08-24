const router = require('express').Router()

router.get('/api', (req, res) => {
  res.send({ title: 'node-basic' })
})

module.exports = router
