const express = require("express");
const router = express.Router();
const favoriteController = require('../controllers/favoriteController');

router.post('/name', favoriteController.createFavorite);
router.get("/favorite/:userId", favoriteController.getAllFavorites );
router.delete("/name/:userId", favoriteController.delete);


module.exports = router;