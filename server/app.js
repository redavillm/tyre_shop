const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3001;
app.use(cors());

app.use(express.static("public"));

app.use(express.json());

app.get("/tyres", TyresController.list);

app.use("*", (req, res) => {
  res.status(404).json({
    message: "404 Not Found",
  });
});

app.use((err, req, res, next) => {
  const { statusCode = 500, message } = err;
  console.log({ err });
  res.status(statusCode).send({
    message: statusCode === 500 ? "На сервере произошла ошибка" : message,
  });
});

app.listen(PORT, () => {
  console.log(`Server app listening at http://localhost:${PORT}`);
});
