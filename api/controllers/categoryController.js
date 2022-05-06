const { Category } = require("../models");
const { Property } = require("../models")
/* exports.newCategory = (req, res) => {
  const  { name, description }  = req.body;
  Category.findOrCreate({ where: { name, description } })
  .then((category) => res.send(category)
  );
}; */

exports.newCategory = (req, res) => {
  console.log('newCategory', req.body)
  const { name } = req.body;
  Category.create({ name })
  .then((category) => res.send(category))
  .catch((error) => res.send(error))
};

 exports.getCatsByProdId = (req, res) => {
  const { id } = req.params;
  console.log(`id es`, id);
  Product.findByPk(id)
    .then((product) => {
      return product.getCategorias();
    })
    .then((data) => {
      res.send(data);
    });
}; 

 exports.getByCategory = (req, res) => {
    const { name } = req.params;
    console.log(`name es`, name);
    Category.findOne({ where: {name}, include: Property })
    .then(category => {
      return category;
    })
    .then(data => {
      res.send(data);
    });
  };
   
 