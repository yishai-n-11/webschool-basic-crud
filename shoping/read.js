const fs = require("fs");

function read() {
  const cart = JSON.parse(fs.readFileSync("./data/cart.json", "utf-8"));
  return cart;
}

module.exports = read;
