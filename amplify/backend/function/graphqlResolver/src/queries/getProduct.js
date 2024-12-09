const { dynamoDB, TABLE_NAME, createProductId } = require('../utils/dynamodb');

module.exports = async ({ id }) => {
  const productId = createProductId(id);

  try {
    // Get product details
    const result = await dynamoDB.query({
      TableName: TABLE_NAME,
      KeyConditionExpression: 'PK = :pk AND SK = :sk',
      ExpressionAttributeValues: {
        ':pk': productId,
        ':sk': 'DETAIL'
      }
    }).promise();

    if (result.Items.length === 0) return null;

    // Get mart info using SubTable index
    const martInfo = await dynamoDB.query({
      TableName: TABLE_NAME,
      IndexName: 'SubTable',
      KeyConditionExpression: 'GSISK = :sk',
      ExpressionAttributeValues: {
        ':sk': productId
      }
    }).promise();

    return {
      id,
      name: result.Items[0].name,
      price: result.Items[0].price,
      timestamp: result.Items[0].timestamp,
      mart: martInfo.Items.length > 0 ? {
        id: martInfo.Items[0].PK.split('#')[1],
        name: martInfo.Items[0].name,
        location: martInfo.Items[0].location
      } : null
    };
  } catch (error) {
    console.error('Error in getProduct:', error);
    throw error;
  }
};
