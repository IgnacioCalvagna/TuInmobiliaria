const db = require('../db');
const { Model, DataTypes } = require('sequelize');
//const marked = require("marked");

class Property extends Model {}

Property.init(
  {
    adress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
 /*   neighborhood: {
      type:DataTypes.STRING,
      allowNull: false,
    }, */
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
     /*  get:function () {
        const truncateDescription = this.getDataValue("description");
        return truncateDescription.substring(0,20) +"...";
      }, */
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    available: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      set(){
        this.setDataValue("available") ? true : false;
      }
    },
    img: {
      type: DataTypes.STRING,
    },
  },
  { sequelize: db, modelName: 'properties' }
);

/* Property.prototype.truncate = function (len) {
  this.content = this.content.slice(0, len);
}
 */
module.exports = Property;
