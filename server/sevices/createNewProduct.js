const uploadImage = require("./img/uploadImage");

const createNewProduct = async (req, res, Model, bucketFolder) => {
  try {
    const { body, file } = req;
    const imageUrl = await uploadImage(file, bucketFolder);

    if (body.season === "summer") {
      console.log("is summer =>  ", body);
      delete body.isSpiked;
    }

    const count = body.count && !isNaN(body.count) ? Number(body.count) : 0;

    const newProduct = new Model({
      ...body,
      imgSrc:
        imageUrl ||
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.bridgestone.com.au%2F-%2Fmedia%2Fproject%2Fbridgestone-global%2Fshared%2Fdefaultimages%2Fdefaulttyreimage.png%3Fh%3D438%26iar%3D0%26w%3D330%26rev%3D167af9b2700a416a9c47d3bddb096824%26hash%3D5283FB32D97F5049769786416193DF68&f=1&nofb=1&ipt=a3d8701b02d72ecef67bdc82233756020e58a65db477c35ed249f4bdce584043&ipo=images",
      count: count,
    });

    await newProduct.save();
    res.status(200).json({ message: "Товар добавлен", product: newProduct });
  } catch (error) {
    console.error("Ошибка при добавлении товара: ", error);
    res.status(500).json({ message: "Ошибка при добавлении товара" });
  }
};

module.exports = createNewProduct;
