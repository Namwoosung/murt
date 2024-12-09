const { dynamoDB, TABLE_NAME, createMartId } = require('../utils/dynamodb');

module.exports = async ({ id }) => {
  const martId = createMartId(id);

  try {
    // Get mart details
    const result = await dynamoDB.query({
      TableName: TABLE_NAME,
      KeyConditionExpression: 'PK = :pk AND SK = :sk',
      ExpressionAttributeValues: {
        ':pk': martId,
        ':sk': 'DETAIL'
      }
    }).promise();

    if (result.Items.length === 0) return null;

    // Get products
    const products = await dynamoDB.query({
      TableName: TABLE_NAME,
      IndexName: 'SubTable',
      KeyConditionExpression: 'GSIPK = :pk',
      ExpressionAttributeValues: {
        ':pk': martId
      }
    }).promise();

    return {
      id,
      name: result.Items[0].name,
      location: result.Items[0].location,
      products: products.Items.map(item => ({
        id: item['GSISK'].split('#')[1],
        name: item.name,
        price: item.price
      }))
    };
  } catch (error) {
    console.error('Error in getMart:', error);
    throw error;
  }
};
