require("dotenv").config();
const { DeleteObjectCommand } = require("@aws-sdk/client-s3");
const s3 = require("../../config/s3Config");

const deleteImage = async (imageUrl) => {
  try {
    if (!imageUrl) {
      throw new Error("Image URL is required to delete an image.");
    }

    const url = new URL(imageUrl);
    const bucketName = process.env.S3_BUCKET_NAME;
    const filePath = url.pathname.substring(1);

    if (!bucketName || !filePath) {
      throw new Error("Missing bucket name or file path.");
    }

    // Параметры для удаления
    const params = {
      Bucket: bucketName,
      Key: filePath,
    };

    // Выполнение команды удаления
    const command = new DeleteObjectCommand(params);
    return await s3.send(command);
  } catch (error) {
    console.error("Error deleting image:", error.message);
    throw new Error("Failed to delete image.");
  }
};

module.exports = deleteImage;
