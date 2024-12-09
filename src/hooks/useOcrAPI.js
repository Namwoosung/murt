import { Lambda } from 'aws-amplify';

const processReceipt = async (imageKey) => {
    try {
        const response = await Lambda.invoke('receiptOcr', {
            body: {
                imageKey: imageKey
            }
        });

        if (response.statusCode === 200) {
            return response.body;
        } else {
            throw new Error(response.body.error);
        }
    } catch (error) {
        console.error('Error processing receipt:', error);
        throw error;
    }
};

// 사용 예시
const handleReceiptUpload = async (imageKey) => {
    try {
        const result = await processReceipt(imageKey);
        console.log('Receipt data:', result);
        // 결과 처리
        // result.paymentInfo.date
        // result.storeInfo.name
        // result.productInfo
        // result.totalPrice
    } catch (error) {
        console.error('Error:', error);
    }
};