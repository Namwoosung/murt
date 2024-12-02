const AWS = require("aws-sdk");
const s3 = new AWS.S3();

exports.handler = async (event) => {
  try {
    const body = JSON.parse(event.body);
    const base64Image = body.image;
    const contentType = body.contentType || "image/jpeg";

    const imageBuffer = Buffer.from(base64Image, "base64");

    // S3 업로드
    const bucketName = process.env.STORAGE_BUCKET_NAME;
    const fileName = `receipts/${Date.now()}.jpg`;

    await s3
      .putObject({
        Bucket: bucketName,
        Key: fileName,
        Body: imageBuffer,
        ContentType: contentType,
      })
      .promise();

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Image uploaded successfully",
        fileName,
      }),
    };
  } catch (error) {
    console.error("Error:", error.message);

    return {
      statusCode: 400,
      body: JSON.stringify({ message: error.message }),
    };
  }
};
