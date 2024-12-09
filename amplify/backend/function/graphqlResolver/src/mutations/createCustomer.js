const { v4: uuidv4 } = require('uuid');
const { dynamoDB, TABLE_NAME, createCustomerId } = require('../utils/dynamodb');

module.exports = async ({ input }) => {
  const customerId = createCustomerId(uuidv4());

  try {
    const item = {
      PK: customerId,
      SK: 'PROFILE',
      ...input,
      createdAt: new Date().toISOString()
    };

    await dynamoDB.put({
      TableName: TABLE_NAME,
      Item: item,
    }).promise();

    return {
      id: customerId.split('#')[1],
      ...input
    };
  } catch (error) {
    console.error('Error in createCustomer:', error);
    throw error;
  }
};
