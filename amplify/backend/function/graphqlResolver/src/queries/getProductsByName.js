const { dynamoDB, TABLE_NAME } = require('../utils/dynamodb');

module.exports = async ({ name }) => {
  try {
    const result = await dynamoDB.scan({
      TableName: TABLE_NAME,
      FilterExpression: 'contains(#name, :name)',
      ExpressionAttributeNames: {
        '#name': 'name'
      },
      ExpressionAttributeValues: {
        ':name': name
      }
    }).promise();

    return result.Items.map(item => ({
      id: item.PK.split('#')[1],
      name: item.name,
      price: item.price,
      mart: item['GSIPK'] ? {
        id: item['GSIPK'].split('#')[1]
      } : null
    }));
  } catch (error) {
    console.error('Error in getProductsByName:', error);
    throw error;
  }
};
