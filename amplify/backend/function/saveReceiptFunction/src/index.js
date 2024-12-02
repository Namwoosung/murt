import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

export const handler = async (event) => {
  let result = "";

  const client = new S3Client({
    region: "ap-northeast-2",
  });

  // S3 버킷 이름
  const bucketName = "murt3d9a0f94a04b417bba57b398662acc4f157c9-dev";

  try {
    const { base64Image, fileName } = JSON.parse(event.body);

    if (!base64Image || !fileName) {
      throw new Error("Missing base64Image or fileName in the request");
    }

    // Base64 디코딩
    const imageBuffer = Buffer.from(base64Image, "base64");

    const command = new PutObjectCommand({
      Bucket: bucketName,
      Key: fileName,
      Body: imageBuffer,
      ContentType: "image/jpeg",
    });

    // S3에 이미지 업로드
    await client.send(command);

    result = {
      statusCode: 200,
      body: JSON.stringify({
        message: "Image uploaded successfully",
        fileName: fileName,
      }),
    };
  } catch (err) {
    console.error("Error uploading image to S3:", err);

    result = {
      statusCode: 500,
      body: JSON.stringify({
        message: "Failed to upload image to S3",
        error: err.message,
      }),
    };
  }

  return result;
};
