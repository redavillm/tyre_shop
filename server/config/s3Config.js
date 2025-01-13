const { S3 } = require("@aws-sdk/client-s3");

const s3 = new S3({
  credentials: {
    accessKeyId: process.env.S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  },

  region: process.env.S3_REGION,
  endpoint: "https://s3.timeweb.cloud",
  forcePathStyle: true,
});

module.exports = s3;
