const db = require('../db');
const { Model, DataTypes } = require('sequelize');


class Location extends Model {}

Location.init({

   name: {
        type: DataTypes.STRING,
        allowNull: false,
   },
},{ sequelize: db, modelName: 'locations'});


module.exports = Location;