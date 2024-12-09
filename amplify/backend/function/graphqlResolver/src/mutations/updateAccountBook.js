const { dynamoDB, TABLE_NAME, createAccountBookId } = require('../utils/dynamodb');

module.exports = async ({ accountBookId, input }) => {
  const accountBook = createAccountBookId(accountBookId);

  try {
    const updateExpressions = [];
    const expressionAttributeValues = {};

    if (input.name) {
      updateExpressions.push('a_name = :name');
      expressionAttributeValues[':name'] = input.name;
    }

    if (input.date) {
      updateExpressions.push('date = :date');
      expressionAttributeValues[':date'] = input.date;
    }

    const result = await dynamoDB.query({
      TableName: TABLE_NAME,
      IndexName: 'SubTable',
      KeyConditionExpression: 'GSIPK = :pk',
      ExpressionAttributeValues: {
        ':pk': accountBook
      }
    }).promise();

    if (result.Items.length === 0) {
      throw new Error('AccountBook not found');
    }

    await dynamoDB.update({
      TableName: TABLE_NAME,
      Key: {
        PK: result.Items[0]['GSISK'],
        SK: accountBook
      },
      UpdateExpression: `SET ${updateExpressions.join(', ')}`,
      ExpressionAttributeValues: expressionAttributeValues
    }).promise();

    return {
      id: accountBookId,
      ...input
    };
  } catch (error) {
    console.error('Error in updateAccountBook:', error);
    throw error;
  }
};
