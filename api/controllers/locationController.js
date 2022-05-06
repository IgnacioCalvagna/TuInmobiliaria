const Location = require('../models/Location');
const { Op } = require("sequelize");
const Property = require("../models/Property");
/* exports.newLocation = (req, res) => {
    const { name } = req.body;
    Location.create({
        name
    }).then(location =>  res.send(location))
    .catch(error => console.log(error))
}; */

/*  exports.getByName = (req, res) => {
     const { name } = req.params;
     Location.findOne({
          where: { name: { [Op.iLike]: `%${name}%`}}
     })
     .then(location => { res.send(location)})
     .catch((error) => res.send(error))
 }; */

 exports.getByLocation = (req, res) => {
    const { name } = req.params;
    console.log(`name es`, name);
    Location.findOne({ where: {name}, include: { Property } })
    .then(location => {
      return location;
    })
    .then(data => {
      res.send(data);
    });
  }; 










 