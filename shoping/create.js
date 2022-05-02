const fs = require("fs");
const readFn = require("./read");

function create(product) {
  const cart = readFn();
  const newCart = {
    ...cart,
    ...product,
  };
  fs.writeFileSync("./data/cart.json", JSON.stringify(newCart));
}

module.exports = create;
