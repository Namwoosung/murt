const addToWishlist = require('./addToWishlist');
const createAccountBook = require('./createAccountBook');
const createCustomer = require('./createCustomer');
const createMart = require('./createMart');
const createProduct = require('./createProduct');
const deleteAccountBook = require('./deleteAccountBook');
const deleteProductFromAccountBook = require('./deleteProductFromAccountBook');
const updateAccountBook = require('./updateAccountBook');
const updateAccountBookProduct = require('./updateAccountBookProduct');
const updateProductPrice = require('./updateProductPrice');

module.exports = {
  addToWishlist,
  createAccountBook,
  createCustomer,
  createMart,
  createProduct,
  deleteAccountBook,
  deleteProductFromAccountBook,
  updateAccountBook,
  updateAccountBookProduct,
  updateProductPrice
};