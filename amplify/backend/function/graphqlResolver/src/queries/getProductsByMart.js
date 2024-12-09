const { dynamoDB, TABLE_NAME, createMartId } = require('../utils/dynamodb');

module.exports = async ({ martId }) => {
  const mart = createMartId(martId);

  try {
    const result = await dynamoDB.query({
      TableName: TABLE_NAME,
      IndexName: 'SubTable',
      KeyConditionExpression: 'GSIPK = :pk',
      ExpressionAttributeValues: {
        ':pk': mart
      }
    }).promise();

    return result.Items.map(item => ({
      id: item['GSISK'].split('#')[1],
      name: item.name,
      price: item.price
    }));
  } catch (error) {
    console.error('Error in getProductsByMart:', error);
    throw error;
  }
};
