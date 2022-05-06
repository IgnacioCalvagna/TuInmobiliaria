const db = require("../db");
const { Model, DataTypes} = require('sequelize');



class Favorite extends Model {}


Favorite.init(
    {
        Active:{
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
         /* userId:{
            type: DataTypes.INTEGER,
            
        },  */
    },
    {   
        sequelize: db,  modelName: "favorites"
    });
       

    module.exports = Favorite; 