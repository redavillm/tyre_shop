require("dotenv").config();
require("./models/db");

const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3001;
const cookieParser = require("cookie-parser");

const AuthorizationController = require("./controllers/Authorization");
const TyreController = require("./controllers/Tyre");
const ProductController = require("./controllers/Product");
const DiskController = require("./controllers/Disk");
const AccumulatorController = require("./controllers/Accumulator");

const upload = require("./middleware/upload");
const authMiddleware = require("./middleware/auth");

const corsOptions = {
  origin: ["http://localhost:3002", "http://localhost:3003"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.static("public"));
app.use(cookieParser());

app.post("/register", AuthorizationController.registration);
app.post("/login", AuthorizationController.login);
app.post(
  "/refresh-token",
  (req, res, next) => {
    console.log("Processing refresh token request...");
    next();
  },
  AuthorizationController.refreshToken
);

app.get("/tyres/unique-parameters", TyreController.getUniqueParameters);
app.post(
  "/tyres",
  authMiddleware,
  upload.single("imgSrc"),
  TyreController.createNewTyre
);
app.put(
  "/tyres",
  authMiddleware,
  upload.single("imgSrc"),
  TyreController.updateTyre
);
app.delete("/tyres/:id", authMiddleware, TyreController.deleteTyre);
app.get("/tyres", TyreController.list);
app.get("/tyres/:id", TyreController.getById);

app.get("/disks/unique-parameters", DiskController.getUniqueParameters);
app.post(
  "/disks",
  authMiddleware,
  upload.single("imgSrc"),
  DiskController.createNewDisk
);
app.put(
  "/disks",
  authMiddleware,
  upload.single("imgSrc"),
  DiskController.updateDisk
);
app.delete("/disks/:id", authMiddleware, DiskController.deleteDisk);
app.get("/disks", DiskController.list);
app.get("/disks/:id", DiskController.getById);

app.get(
  "/accumulators/unique-parameters",
  AccumulatorController.getUniqueParameters
);
app.post(
  "/accumulators",
  authMiddleware,
  upload.single("imgSrc"),
  AccumulatorController.createNewAccumulator
);
app.put(
  "/accumulators",
  authMiddleware,
  upload.single("imgSrc"),
  AccumulatorController.updateAccumulator
);
app.delete(
  "/accumulators/:id",
  authMiddleware,
  AccumulatorController.deleteAccumulator
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
