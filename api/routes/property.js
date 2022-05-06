const express = require("express");
const router = express.Router();
const propertyController = require('../controllers/propertyControler');

router.get("/getAllProperty", propertyController.getAllProperty);
router.get("/getById/:id", propertyController.getById);
router.post("/add", propertyController.add);
router.put("/:id", propertyController.update);
router.delete("/:id", propertyController.delete);
router.get("/category/:id", propertyController.getByCategory);
router.get("/getByLocation/:name", propertyController.getByLocation); 
router.get("/getByLowerPrice", propertyController.getByLowerPrice);

module.exports = router;
