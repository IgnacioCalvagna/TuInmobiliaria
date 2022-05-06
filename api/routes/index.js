const express = require("express");
const router = express.Router();

const user = require("./user");
const property = require("./property");
const category = require("./category");
const location = require("./location");
const favorite = require("./favorite");


router.use('/user', user);
router.use("/property", property);
router.use("/category", category);
router.use("/location", location);
router.use('/favorite', favorite );

module.exports = router;