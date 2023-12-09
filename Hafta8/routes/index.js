const express = require("express")

const postsRoute = require("./posts.route")
const authorRoute = require("./author.route")

const router = express.Router()

router.use('/posts', postsRoute)
router.use('/authors', authorRoute)

module.exports = router;