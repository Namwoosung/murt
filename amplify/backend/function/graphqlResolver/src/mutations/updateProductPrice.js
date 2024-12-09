const { dynamoDB, TABLE_NAME, createProductId } = require('../utils/dynamodb');

module.exports = async ({ productId, input }) => {
  const product = createProductId(productId);

  try {
    await dynamoDB.update({
      TableName: TABLE_NAME,
      Key: {
        PK: product,
        SK: 'DETAIL'
      },
      UpdateExpression: 'SET p_price = :price',
      ExpressionAttributeValues: {
        ':price': input.price
      }
    }).promise();

    return {
      id: productId,
      price: input.price
    };
  } catch (error) {
    console.error('Error in updateProductPrice:', error);
    throw error;
  }
};
