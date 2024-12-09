/* Amplify Params - DO NOT EDIT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const { S3Client, GetObjectCommand } = require('@aws-sdk/client-s3');
const request = require('request-promise');
const { Buffer } = require('buffer');

exports.handler = async (event) => {
  try {
    // event.arguments.input.imageKey로 S3 이미지 키 받기
    const imageKey = event.arguments.input.imageKey;
    const bucketName = process.env.BUCKET_NAME;
    
    // S3에서 이미지 다운로드
    const s3Client = new S3Client({ region: process.env.AWS_REGION });
    const getObjectCommand = new GetObjectCommand({
      Bucket: bucketName,
      Key: imageKey
    });
    
    const response = await s3Client.send(getObjectCommand);
    const imageBuffer = await streamToBuffer(response.Body);
    
    // OCR API 호출
    const ocrResult = await processOCR(imageBuffer);
    
    return ocrResult;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

async function streamToBuffer(stream) {
  const chunks = [];
  for await (const chunk of stream) {
    chunks.push(chunk);
  }
  return Buffer.concat(chunks);
}

async function processOCR(imageBuffer) {
  const apiUrl = 'https://3lw4f4mamp.apigw.ntruss.com/custom/v1/35733/81998f2d759c60f8772617c8d9589f4f1f3e83a4f7fca03370e66ebc35487f3a/document/receipt';
  
  const options = {
    uri: apiUrl,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-OCR-SECRET': process.env.API_SECRET_KEY
    },
    body: {
      version: 'V2',
      requestId: '',
      timestamp: Date.now().toString(),
      images: [{
        format: 'jpg',
        data: imageBuffer.toString('base64'),
        name: 'receipt'
      }]
    },
    json: true
  };

  const result = await request(options);
  return formatOCRResponse(result);
}

function formatOCRResponse(ocrResult) {
  const receipt = ocrResult.images[0].receipt.result;
  
  return {
    paymentInfo: {
      date: receipt.paymentInfo.date.text
    },
    storeInfo: {
      name: receipt.storeInfo.name.formatted.value,
      address: receipt.storeInfo.addresses[0].formatted.value,
      tel: receipt.storeInfo.tel[0].text
    },
    productInfo: receipt.subResults[0].items.map(item => ({
      name: item.name.formatted.value,
      amount: item.count.formatted.value,
      price: item.price.price.formatted.value
    })),
    totalPrice: receipt.totalPrice.price.formatted.value
  };
}
