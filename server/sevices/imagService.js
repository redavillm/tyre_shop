const s3 = require("../config/s3Config");
const { v4: uuidv4 } = require("uuid");
const sharp = require("sharp");

const uploadImage = async (req, res) => {
  try {
    const file = req.file;
    const fileName = `${uuidv4()}_${file.originalname}`;

    const optimizedImage = await sharp(file.buffer)
      .resize(800, 800, { fit: "inside" }) // Изменение размеров до 800x800, сохраняя пропорции
      .toFormat("jpeg") // Конвертация в JPEG
      .jpeg({ quality: 80 }) // Установка качества на 80%
      .toBuffer();

    const uploadParams = {
      Bucket: process.env.S3_BUCKET_NAME,
      Key: `products/${fileName}`,
      Body: optimizedImage,
      ContentType: file.mimetype,
      ACL: "public-read",
    };

    const data = await s3.upload(uploadParams).promise();
    res.status(200).json({ imageUrl: data.Location });
  } catch (error) {
    console.error("Ошибка загрузки изображения:", error);
    res.status(500).json({ message: "Ошибка при загрузке изображения" });
  }
};

module.exports = { uploadImage };
