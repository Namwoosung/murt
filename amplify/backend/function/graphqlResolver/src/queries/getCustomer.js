const { dynamoDB, TABLE_NAME, createCustomerId } = require('../utils/dynamodb');

module.exports = async ({ id }) => {
  const customerId = createCustomerId(id);

  try {
    // Get customer profile
    const result = await dynamoDB.query({
      TableName: TABLE_NAME,
      KeyConditionExpression: 'PK = :pk AND SK = :sk',
      ExpressionAttributeValues: {
        ':pk': customerId,
        ':sk': 'PROFILE'
      }
    }).promise();

    if (result.Items.length === 0) return null;

    // Get account books
    const accountBooks = await dynamoDB.query({
      TableName: TABLE_NAME,
      KeyConditionExpression: 'PK = :pk AND begins_with(SK, :sk)',
      ExpressionAttributeValues: {
        ':pk': customerId,
        ':sk': 'ACCOUNTBOOK#'
      }
    }).promise();

    // Get wishlist
    const wishlist = await dynamoDB.query({
      TableName: TABLE_NAME,
      KeyConditionExpression: 'PK = :pk AND SK = :sk',
      ExpressionAttributeValues: {
        ':pk': customerId,
        ':sk': 'WISHLIST'
      }
    }).promise();

    return {
      id,
      nickname: result.Items[0].nickname,
      email: result.Items[0].email,
      accountBooks: accountBooks.Items.map(book => ({
        id: book.SK.split('#')[1],
        name: book.name,
        date: book.date
      })),
      wishlist: wishlist.Items.map(item => ({
        id: item['GSIPK'].split('#')[1]
      }))
    };
  } catch (error) {
    console.error('Error in getCustomer:', error);
    throw error;
  }
};
