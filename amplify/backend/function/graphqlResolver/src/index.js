/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	TABLE_NAME
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const mutations = require('./mutations');
const queries = require('./queries');

exports.handler = async (event) => {
  try {
    console.log('Received event:', JSON.stringify(event, null, 2));

    const field = event.info.fieldName;
    const args = event.arguments;
    const identity = event.identity;

    let handler;
    if (event.info.parentTypeName === 'Query') {
      handler = queries[field];
    } else if (event.info.parentTypeName === 'Mutation') {
      handler = mutations[field];
    }

    if (!handler) {
      throw new Error(`Handler not found for field: ${field}`);
    }

    const result = await handler(args, identity);
    return result;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
