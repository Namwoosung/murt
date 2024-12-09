const { dynamoDB, TABLE_NAME, createAccountBookId, createProductId } = require('../utils/dynamodb');

module.exports = async ({ accountBookId, productId }) => {
  const accountBook = createAccountBookId(accountBookId);
  const product = createProductId(productId);

  try {
    await dynamoDB.delete({
      TableName: TABLE_NAME,
      Key: {
        PK: accountBook,
        SK: product
      }
    }).promise();

    return true;
  } catch (error) {
    console.error('Error in deleteProductFromAccountBook:', error);
    throw error;
  }
};
