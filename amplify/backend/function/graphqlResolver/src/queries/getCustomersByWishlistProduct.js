const { dynamoDB, TABLE_NAME, createProductId } = require('../utils/dynamodb');

module.exports = async ({ productId }) => {
  const product = createProductId(productId);

  try {
    const result = await dynamoDB.query({
      TableName: TABLE_NAME,
      IndexName: 'SubTable',
      KeyConditionExpression: 'GSIPK = :pk',
      ExpressionAttributeValues: {
        ':pk': product
      }
    }).promise();

    const customers = [];
    for (const item of result.Items) {
      const customerId = item['GSISK'];
      const customerData = await dynamoDB.query({
        TableName: TABLE_NAME,
        KeyConditionExpression: 'PK = :pk AND SK = :sk',
        ExpressionAttributeValues: {
          ':pk': customerId,
          ':sk': 'PROFILE'
        }
      }).promise();

      if (customerData.Items.length > 0) {
        customers.push({
          id: customerId.split('#')[1],
          nickname: customerData.Items[0].nickname,
          email: customerData.Items[0].email
        });
      }
    }

    return customers;
  } catch (error) {
    console.error('Error in getCustomerByWishlistProduct:', error);
    throw error;
  }
};
