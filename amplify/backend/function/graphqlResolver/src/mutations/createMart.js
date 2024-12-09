const { v4: uuidv4 } = require('uuid');
const { dynamoDB, TABLE_NAME, createMartId } = require('../utils/dynamodb');

module.exports = async ({ input }) => {
  const martId = createMartId(uuidv4());

  try {
    const item = {
      PK: martId,
      SK: 'DETAIL',
      ...input,
      createdAt: new Date().toISOString()
    };

    await dynamoDB.put({
      TableName: TABLE_NAME,
      Item: item
    }).promise();

    return {
      id: martId.split('#')[1],
      ...input
    };
  } catch (error) {
    console.error('Error in createMart:', error);
    throw error;
  }
};
