const express = require("express");

const controller = require("../controller")

const router = express.Router({ mergeParams: true })

router.route('/').post(controller.authorController.saveAuthor)
router.route('/').get(controller.authorController.getAllAuthors)
router.route('/').put(controller.authorController.updateAuthor)
router.route('/').delete(controller.authorController.deleteAuthor)
router.route('/search').get(controller.authorController.searchAuthorsByName)

module.exports = router;