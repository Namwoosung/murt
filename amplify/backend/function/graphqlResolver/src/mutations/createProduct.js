const { v4: uuidv4 } = require('uuid');
const { dynamoDB, TABLE_NAME, createProductId, createMartId } = require('../utils/dynamodb');

module.exports = async ({ input }) => {
  const productId = createProductId(uuidv4());
  const martId = createMartId(input.martId);

  try {
    const item = {
      PK: productId,
      SK: 'DETAIL',
      ...input,
      'GSIPK': martId,
      'GSISK': productId,
      createdAt: new Date().toISOString()
    };

    await dynamoDB.put({
      TableName: TABLE_NAME,
      Item: item
    }).promise();

    return {
      id: productId.split('#')[1],
      ...input,
      mart: {
        id: input.martId,
        name: input.martName,
        location: input.martLocation
      }
    };
  } catch (error) {
    console.error('Error in createProduct:', error);
    throw error;
  }
};
