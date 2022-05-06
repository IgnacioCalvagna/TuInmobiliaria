const { Favorite } = require('../models');

exports.createFavorite = (req, res) => { 
    console.log('body', req.body)
 const { Active, propertyId, UserId } = req.body;
 Favorite.create({ Active, propertyId, UserId })
 .then((createFavorite) => res.send(createFavorite))
 .catch((err) => console.log(err)) ;
};

exports.getAllFavorites = (req, res) => {
    const { userId } = req.params;
    Favorite.findAll({ userId })
    .then(result => {res.send(result)})
};

exports.delete = (req, res) => {
    const { userId } = req.params;
    Favorite.destroy({ userId })
    .then(result => {res.send(result)})
} 
