require("dotenv").config();
require("./models/db");

const express = require("express");
const cors = require("cors");
const upload = require("./middleware/upload");
const app = express();
const PORT = 3001;

const TyreController = require("./controllers/Tyre");
const ProductController = require("./controllers/Product");
const DiskController = require("./controllers/Disk");
const AccumulatorController = require("./controllers/Accumulator");
const { tyreValidation } = require("./middleware/validationRules");
const { uploadImage } = require("./sevices/imagService");

const corsOptions = {
  origin: ["http://localhost:3002", "http://localhost:3003"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.static("public"));
app.post("/upload-image", upload.single("image"), uploadImage);

app.get("/tyres/unique-parameters", TyreController.getUniqueParameters);
app.get("/tyres", TyreController.list);
app.get("/tyres/:id", TyreController.getById);
app.post("/add-new-tyre", tyreValidation, TyreController.createNewTyre);

app.get("/disks/unique-parameters", DiskController.getUniqueParameters);
app.get("/disks", DiskController.list);
app.get("/disks/:id", DiskController.getById);

app.get(
  "/accumulators/unique-parameters",
  AccumulatorController.getUniqueParameters
);
app.get("/accumulators", AccumulatorController.list);
app.get("/accumulators/:id", AccumulatorController.getById);

app.post("/get-cart-items", ProductController.getCartItems);

app.use("*", (req, res) => {
  res.status(404).json({
    message: "404 Not Found",
  });
});

app.use((err, req, res) => {
  const { statusCode = 500, message } = err;
  console.log({ err });
  res.status(statusCode).send({
    message: statusCode === 500 ? "На сервере произошла ошибка" : message,
  });
});

app.listen(PORT, () => {
  console.log(`Server app listening at http://localhost:${PORT}`);
});
