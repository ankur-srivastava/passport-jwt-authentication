const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')()
const postController = require('../controllers/postController')

router.get('/', auth.authenticate(), postController.getPost)

module.exports = router
