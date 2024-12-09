const { Buffer } = require('buffer');
const { S3Client, GetObjectCommand } = require('@aws-sdk/client-s3');
const request = require('request-promise');

// S3 클라이언트 초기화
const s3Client = new S3Client({
    region: process.env.AWS_REGION
});

// S3에서 이미지 다운로드
async function downloadImage(bucketName, key) {
    try {
        const command = new GetObjectCommand({
            Bucket: bucketName,
            Key: key,
        });

        const response = await s3Client.send(command);

        const chunks = [];
        for await (const chunk of response.Body) {
            chunks.push(chunk);
        }
        const buffer = Buffer.concat(chunks);

        console.log('이미지 다운로드 완료');
        return buffer;
    } catch (error) {
        console.error('이미지 다운로드 중 오류 발생:', error);
        throw error;
    }
}

// OCR API 호출
async function getOcrResponse(imageBuffer) {
    try {
        const base64Encoded = imageBuffer.toString('base64');
        const apiUrl = 'https://3lw4f4mamp.apigw.ntruss.com/custom/v1/35733/81998f2d759c60f8772617c8d9589f4f1f3e83a4f7fca03370e66ebc35487f3a/document/receipt';
        const secretKey = process.env.API_SECRET_KEY;

        const options = {
            uri: apiUrl,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'X-OCR-SECRET': secretKey
            },
            body: {
                'version': 'V2',
                'requestId': '',
                'timestamp': Date.now().toString(),
                'lang': 'ko',
                'images': [{
                    'format': 'jpg',
                    'data': base64Encoded,
                    'name': 'receipt'
                }]
            },
            json: true,
            resolveWithFullResponse: false
        };

        const body = await request(options);
        return body;
    } catch (error) {
        console.error('OCR 요청 중 오류 발생:', error);
        throw error;
    }
}

exports.handler = async (event) => {
    try {
        const bucketName = process.env.BUCKET_NAME;
        // event에서 이미지 키를 받기
        const imageKey = event.imageKey;

        if (!imageKey) {
            throw new Error('Image key is required');
        }

        // S3에서 이미지 다운로드
        const imageBuffer = await downloadImage(bucketName, imageKey);

        // OCR 처리
        const ocrResult = await getOcrResponse(imageBuffer);

        // 결과 파싱
        const images = ocrResult.images[0];
        const res = images.receipt.result;

        const products = res.subResults[0].items.map(item => ({
            name: item.name.formatted.value,
            amount: item.count.formatted.value,
            price: item.price.price.formatted.value
        }));

        // 파싱된 결과 반환
        return {
            statusCode: 200,
            body: {
                paymentInfo: {
                    date: res.paymentInfo.date.text
                },
                storeInfo: {
                    name: res.storeInfo.name.formatted.value,
                    address: res.storeInfo.addresses[0].formatted.value,
                    tel: res.storeInfo.tel[0].text
                },
                productInfo: products,
                totalPrice: res.totalPrice.price.formatted.value
            }
        };
    } catch (error) {
        console.error('Lambda 실행 중 오류 발생:', error);
        return {
            statusCode: 500,
            body: {
                error: error.message
            }
        };
    }
};