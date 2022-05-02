const args = process.argv.slice(2);
const readFn = require("./read");
const createFn = require("./create");
const operation = args[0];
const newProduct = JSON.parse(args[1]);

const allowed = ["create", "read", "update", "delete"];

if (!allowed.includes(operation)) {
  throw new Error(`op ${operation} is not CRUD`);
}

switch (operation) {
  case "read":
    readFn();
    break;
  case "create":
    createFn(newProduct);
    break;
}
