const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();

const TABLE_NAME = process.env.TABLE_NAME;

const createCustomerId = (id) => `CUSTOMER#${id}`;
const createProductId = (id) => `PRODUCT#${id}`;
const createMartId = (id) => `MART#${id}`;
const createAccountBookId = (id) => `ACCOUNTBOOK#${id}`;

module.exports = {
  dynamoDB,
  TABLE_NAME,
  createCustomerId,
  createProductId,
  createMartId,
  createAccountBookId
};
