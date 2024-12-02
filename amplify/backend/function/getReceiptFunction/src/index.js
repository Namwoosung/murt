import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";

export const handler = async (event) => {
  let result = "";

  const client = new S3Client({
    region: "ap-northeast-2",
  });

  // S3 버킷 이름
  const bucketName = "murt3d9a0f94a04b417bba57b398662acc4f157c9-dev";

  try {
    const fileName = event.queryStringParameters?.fileName;

    if (!fileName) {
      throw new Error("Missing fileName in the request");
    }

    const command = new GetObjectCommand({
      Bucket: bucketName,
      Key: fileName,
    });

    const response = await client.send(command);

    const streamToBuffer = (stream) =>
      new Promise((resolve, reject) => {
        const chunks = [];
        stream.on("data", (chunk) => chunks.push(chunk));
        stream.on("end", () => resolve(Buffer.concat(chunks)));
        stream.on("error", reject);
      });

    const fileBuffer = await streamToBuffer(response.Body);

    // 파일 데이터를 Base64로 변환하여 반환
    result = {
      statusCode: 200,
      body: JSON.stringify({
        message: "File fetched successfully",
        fileName: fileName,
        fileData: fileBuffer.toString("base64"),
      }),
    };
  } catch (err) {
    console.error("Error fetching file from S3:", err);

    result = {
      statusCode: 500,
      body: JSON.stringify({
        message: "Failed to fetch file from S3",
        error: err.message,
      }),
    };
  }

  return result;
};
