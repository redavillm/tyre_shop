const s3 = require("../config/s3Config");
const { v4: uuidv4 } = require("uuid");
const sharp = require("sharp");
const { Upload } = require("@aws-sdk/lib-storage");

const uploadImage = async (file, bucketFolder) => {
  try {
    if (!file) {
      throw new Error("Файл изображения отсутствует");
    }
    const fileName = `${uuidv4()}_${file.originalname}`;

    const optimizedImage = await sharp(file.buffer)
      .resize(800, 800, { fit: "inside" }) // Изменение размеров до 800x800, сохраняя пропорции
      .toFormat("jpeg") // Конвертация в JPEG
      .jpeg({ quality: 80 }) // Установка качества на 80%
      .toBuffer();

    const upload = new Upload({
      client: s3,
      params: {
        Bucket: process.env.S3_BUCKET_NAME,
        Key: `${bucketFolder}/${fileName}`,
        Body: optimizedImage,
        ContentType: "image/jpeg",
        ACL: "public-read",
      },
    });

    const { Location: imageUrl } = await upload.done();

    if (!imageUrl) {
      return res
        .status(500)
        .json({ message: "Ошибка при загрузке изображения" });
    }

    return imageUrl;
  } catch (error) {
    console.error("Ошибка загрузки изображения:", error);
  }
};

module.exports = uploadImage;
