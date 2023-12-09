const express = require("express");

const controller = require("../controller")

const router = express.Router({ mergeParams: true })

const postSchema = require("../validation/postSchema")
const { checkSchema } = require("express-validator");


router.route('/').post(controller.postController.savePost)
// router.post('/',postSchema, controller.postController.savePost)
router.route('/').get(controller.postController.getAllPosts)
router.route('/').put(controller.postController.updatePost)
router.route('/').delete(controller.postController.deletePost)
router.route('/search').get(controller.postController.searchPostByAuthor)

module.exports = router;