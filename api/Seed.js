const { Properties } = require("./Property.json");
const { Categories } = require("./Category.json");
const { Locations } = require("./Location.json");

const db = require("./db");
const { Property } = require("./models");
const { Category } = require("./models");
const { Location } = require("./models");

const setupSeed = () => {
 
  Category.bulkCreate(Categories)
    .then((categories) => {
      return Property.bulkCreate(Properties);
    })
    .then((properties) => {
      return Location.bulkCreate(Locations);
      console.log(properties);
    })
    .then((locations) => {console.log(locations);})
};

db.sync().then(setupSeed);
