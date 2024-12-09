const { dynamoDB, TABLE_NAME, createAccountBookId } = require('../utils/dynamodb');

module.exports = async ({ id }) => {
  const accountBookId = createAccountBookId(id);

  try {
    // Get products
    const products = await dynamoDB.query({
      TableName: TABLE_NAME,
      KeyConditionExpression: 'PK = :pk',
      ExpressionAttributeValues: {
        ':pk': accountBookId
      }
    }).promise();

    // Get customer info
    const customerInfo = await dynamoDB.query({
      TableName: TABLE_NAME,
      IndexName: 'SubTable',
      KeyConditionExpression: 'GSIPK = :pk',
      ExpressionAttributeValues: {
        ':pk': accountBookId
      }
    }).promise();

    if (customerInfo.Items.length === 0) return null;

    return {
      id,
      name: customerInfo.Items[0].a_name,
      date: customerInfo.Items[0].date,
      customer: {
        id: customerInfo.Items[0]['GSISK'].split('#')[1],
        nickname: customerInfo.Items[0].nickname
      },
      products: products.Items.map(item => ({
        product: {
          id: item.SK.split('#')[1],
          name: item.name,
          price: item.price
        },
        amount: item.amount
      }))
    };
  } catch (error) {
    console.error('Error in getAccountBook:', error);
    throw error;
  }
};
