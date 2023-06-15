// const { Person } = require("./person");
require("./modules/express");
const dotenv = require("dotenv");
dotenv.config();

require("./modules/src/database/connect");

// const person = new Person("Diogo Borges");

// console.log(person.sayMayName());
