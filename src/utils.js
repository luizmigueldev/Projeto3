const bcrypt = require("bcryptjs");

const encode = (text) => {
  return bcrypt.hashSync(text);
}

const compare = (password, hashPassword) => {
  return bcrypt.compareSync(password, hashPassword);
}

module.exports = { encode, compare }