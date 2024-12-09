const { dynamoDB, TABLE_NAME, createAccountBookId } = require('../utils/dynamodb');

module.exports = async ({ accountBookId }) => {
  const accountBook = createAccountBookId(accountBookId);

  try {
    // Get all products in account book
    const products = await dynamoDB.query({
      TableName: TABLE_NAME,
      KeyConditionExpression: 'PK = :pk',
      ExpressionAttributeValues: {
        ':pk': accountBook
      }
    }).promise();

    // Get customer reference
    const customerRef = await dynamoDB.query({
      TableName: TABLE_NAME,
      IndexName: 'SubTable',
      KeyConditionExpression: 'GSIPK = :pk',
      ExpressionAttributeValues: {
        ':pk': accountBook
      }
    }).promise();

    // Delete all products
    const deletePromises = products.Items.map(item =>
      dynamoDB.delete({
        TableName: TABLE_NAME,
        Key: {
          PK: accountBook,
          SK: item.SK
        }
      }).promise()
    );

    // Delete customer reference
    deletePromises.push(
      dynamoDB.delete({
        TableName: TABLE_NAME,
        Key: {
          PK: customerRef.Items[0]['GSISK'],
          SK: accountBook
        }
      }).promise()
    );

    await Promise.all(deletePromises);

    return true;
  } catch (error) {
    console.error('Error in deleteAccountBook:', error);
    throw error;
  }
};
