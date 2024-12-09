const { dynamoDB, TABLE_NAME, createCustomerId, createProductId } = require('../utils/dynamodb');

module.exports = async ({ customerId, productId }) => {
  const customer = createCustomerId(customerId);
  const product = createProductId(productId);

  try {
    await dynamoDB.put({
      TableName: TABLE_NAME,
      Item: {
        PK: customer,
        SK: 'WISHLIST',
        'GSIPK': product,
        'GSISK': customer,
      }
    }).promise();

    return true;
  } catch (error) {
    console.error('Error in addToWishlist:', error);
    throw error;
  }
};
