const Property = require("../models/Property");
const { Op } = require("sequelize");
const { Category, User } = require("../models");
const { Location } = require("../models");

exports.getAllProperty = (req, res) => {
  Property.findAll({ include: [Category, Location] }).then((property) => {
    res.send(property);
  });
};
exports.getByLowerPrice = (req, res) => {
  Property.findAll({ include: [Location] }).then((properties) => {
    properties.sort((a, b) => {
      return a.price - b.price;
    });
    res.send(properties);
  });
};

exports.getById = (req, res) => {
  console.log("el params", req.params.id);
  const { id } = req.params;
  Property.findOne({ where: { id } }).then((product) => res.send(product));
};

exports.putEditById = (req, res) => {
  const { id } = req.params;
  Property.update(req.body, { where: { id }, returning: true }).then(
    (property) => res.send(property)
  );
};

exports.getByLocation = (req, res) => {
  const { name } = req.params;
  console.log(`name es`, name);
  Location.findOne({ where: { name } })
    .then((location) => {
      console.log(`location es`, location);
      return Property.findAll({
        where: { locationId: location.id },
        include: [Location],
      });
    })
    .then((data) => {
      res.send(data);
    });
};

exports.add = (req, res) => {
  const { adress, category, location, description, price, available, img } =
    req.body;
  let locationId;
  console.log("soy el name", req.body);
  Location.findOne({ where: { name: location } })
    .then((location) => (locationId = location.id))
    .then(() => {
      return Category.findOne({ where: { name: category } });
    })
    .then((category) => {
      return Property.create({
        locationId,
        categoryId: category.id,
        adress,
        description,
        price,
        available,
        img,
      });
    })
    .then((property) => {
      // console.log("locationId",locationId)
      // property.addLocation(locationId)
      res.send(property);
    })
    .catch((error) => res.send(error));
};

exports.update = (req, res) => {
  const { id } = req.params;
  Property.update(req.body, {
    where: {
      id,
    },
    returning: true,
    plain: true,
  }).then((result) => {
    const property = result[1];
    res.status(201).json({
      property,
    });
  });
};

exports.deleteById = (req, res) => {
  const { id } = req.params;
  Property.destroy({ where: { id } }).then(() => res.sendStatus(202));
};

exports.getByCategory = (req, res) => {
  const { id } = req.params;
  Category.findByPk(id, { include: { model: Property, as: "propiedades" } })
    .then((category) => {
      return category.getProperty();
    })
    .then((data) => {
      res.send(data);
    });
};

exports.addPropertyCategory = (req, res) => {
  const { id } = req.params;
  Product.update(req.body, {
    where: {
      id,
    },
    returning: true,
    plain: true,
  }).then((result) => {
    const intermedia = result[1];
    res.status(201).json({
      intermedia,
    });
  });
};
exports.putAddToFavorite = (req, res) => {
 /*  const { id, userId } = req.body;
  console.log("es el ID", id)
  console.log("es el user ID", userId) */
  res.send("las pelotas llenas")
 
};

