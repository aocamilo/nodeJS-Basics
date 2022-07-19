const faker = require("faker");
const boom = require("@hapi/boom");

const validatorHandler = require("../middlewares/validator.handler");

class ProductService {
  constructor() {
    this.products = [];
    this.generate();
  }

  generate() {
    const limit = 100;

    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
        isBlocked: faker.datatype.boolean(),
      });
    }
  }

  async create(data) {
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data,
    };

    this.products.push(newProduct);

    return newProduct;
  }

  async find() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.products);
      }, 1000);
    });
  }

  async findOne(id) {
    const item = this.products.find((item) => item.id === id);

    if (!item) {
      throw boom.notFound("Product not found");
    }

    if (item.isBlocked) {
      throw boom.conflict("Product is blocked");
    }

    return item;
  }

  async update(id, newData) {
    const index = this.products.findIndex((item) => item.id === id);

    if (index === -1) {
      throw boom.notFound("Product not found");
    }

    this.products[index] = { ...this.products[index], ...newData };

    return this.products[index];
  }

  async delete(id) {
    const index = this.products.findIndex((item) => item.id == id);

    if (index === -1) {
      throw boom.notFound("Product not found");
    }

    this.products.splice(index, 1);
  }
}

module.exports = ProductService;
