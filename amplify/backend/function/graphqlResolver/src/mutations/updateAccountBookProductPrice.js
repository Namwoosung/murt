const { dynamoDB, TABLE_NAME, createAccountBookId, createProductId } = require('../utils/dynamodb');

module.exports = async ({ accountBookId, productId, input }) => {
  const accountBook = createAccountBookId(accountBookId);
  const product = createProductId(productId);

  try {
    await dynamoDB.update({
      TableName: TABLE_NAME,
      Key: {
        PK: accountBook,
        SK: product
      },
      UpdateExpression: 'SET p_price = :price',
      ExpressionAttributeValues: {
        ':price': input.price
      }
    }).promise();

    return {
      product: { id: productId },
      price: input.price
    };
  } catch (error) {
    console.error('Error in updateAccountBookProduct:', error);
    throw error;
  }
};
