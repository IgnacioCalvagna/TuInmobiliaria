const express = require("express");
const router = express.Router();
const categoryController = require('../controllers/categoryController');

router.post('/new', categoryController.newCategory);
router.get("/:name", categoryController.getByCategory);

module.exports = router;