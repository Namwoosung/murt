const { v4: uuidv4 } = require('uuid');
const { dynamoDB, TABLE_NAME, createCustomerId, createAccountBookId, createMartId } = require('../utils/dynamodb');

module.exports = async ({ input }) => {
  const accountBookId = createAccountBookId(uuidv4());
  const customerId = createCustomerId(input.customerId);
  const martId = createMartId(uuidv4());

  try {
    // Create mart
    await dynamoDB.put({
      TableName: TABLE_NAME,
      Item: {
        PK: martId,
        SK: 'DETAIL',
        name: input.martName,
        location: input.martLocation
      }
    }).promise();

    // Create account book reference
    await dynamoDB.put({
      TableName: TABLE_NAME,
      Item: {
        PK: customerId,
        SK: accountBookId,
        name: input.name,
        date: input.date,
        'GSIPK': accountBookId,
        'GSISK': customerId,
      }
    }).promise();

    // Add products
    const productPromises = input.products.map(product =>
      dynamoDB.put({
        TableName: TABLE_NAME,
        Item: {
          PK: accountBookId,
          SK: `PRODUCT#${uuidv4()}`,
          name: product.name,
          price: product.price,
          amount: product.amount,
        }
      }).promise()
    );

    await Promise.all(productPromises);

    return {
      id: accountBookId.split('#')[1],
      ...input,
      mart: {
        id: martId.split('#')[1],
        name: input.martName,
        location: input.martLocation,
      }
    };
  } catch (error) {
    console.error('Error in createAccountBook:', error);
    throw error;
  }
};
