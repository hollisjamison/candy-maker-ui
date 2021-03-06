const models = require('../models')

const getAllProducts = async (request, response) => {
  const products = await models.Products.findAll({
    include: [{ model: models.Manufacturers }]
  })

  return response.send(products)
}

const getProductsById = async (request, response) => {
  const { id } = request.params

  const product = await models.Products.findOne({
    attributes: ['id', 'name', 'yearIntroduced'],
    where: { id },
    include: [{
      model: models.Manufacturers,
      attributes: ['id', 'name', 'country'],
    }],
  })

  return product
    ? response.send(product)
    : response.sendStatus(404)
}

module.exports = { getAllProducts, getProductsById }
