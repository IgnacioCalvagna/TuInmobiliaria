/* const {PropertyCategory }= require('../models')

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
  }; */