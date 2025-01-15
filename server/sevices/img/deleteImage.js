const s3 = require("../../config/s3Config");

const deleteImage = async (imageUrl) => {
  try {
    if (!imageUrl) {
      throw new Error("Image URL is required to delete an image.");
    }

    const urlParts = imageUrl.split("/");
    const fileName = urlParts[urlParts.length - 1]; // название файла
    const folderName = urlParts[urlParts.length - 2]; //папка где картинка
    const bucketName = process.env.AWS_S3_BUCKET_NAME; //имя бакета

    // delete params
    const params = {
      Bucket: bucketName,
      Key: `${folderName}/${fileName}`,
    };
    await s3.deleteObject(params).promise();
  } catch (error) {
    console.error("Error deleting image:", error.message);
    throw new Error("Failed to delete image.");
  }
};

module.exports = deleteImage;
