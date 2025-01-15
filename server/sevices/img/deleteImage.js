require("dotenv").config();
const { S3Client, DeleteObjectCommand } = require("@aws-sdk/client-s3");

const s3 = new S3Client({
  region: process.env.S3_REGION, // Регион вашего бакета
  endpoint: process.env.S3_ENDPOINT,
  credentials: {
    accessKeyId: process.env.S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  },
});

const deleteImage = async (imageUrl) => {
  try {
    if (!imageUrl) {
      throw new Error("Image URL is required to delete an image.");
    }

    const url = new URL(imageUrl);

    // const urlParts = imageUrl.split("/");
    const filePath = url.pathname.substring(1);
    const bucketName = process.env.S3_BUCKET_NAME; // имя бакета

    // Проверяем наличие всех обязательных данных
    if (!bucketName || !filePath) {
      throw new Error("Missing bucket name or file path.");
    }

    // delete params
    const params = {
      Bucket: bucketName,
      Key: filePath,
    };

    const command = new DeleteObjectCommand(params);
    await s3.send(command);
  } catch (error) {
    console.error("Error deleting image:", error.message);
    throw new Error("Failed to delete image.");
  }
};

module.exports = deleteImage;
