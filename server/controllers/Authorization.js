const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const ACCESS_SECRET = process.env.ACCESS_SECRET;
const REFRESH_SECRET = process.env.REFRESH_SECRET;

const registration = async (req, res) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashedPassword });
    await user.save();
    res.status(201).send("User registered");
  } catch (e) {
    console.log("Error while post /register: ", e.message);
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).send("Invalid username or password");
    }

    const token = jwt.sign({ username: user.username }, ACCESS_SECRET, {
      expiresIn: "15m",
    });
    const refreshToken = jwt.sign({ username: user.username }, REFRESH_SECRET, {
      expiresIn: "12h",
    });

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true, // Делает cookie недоступным для JavaScript
      secure: process.env.NODE_ENV === "production" ? true : false, // Для продакшн-режима
      maxAge: 12 * 60 * 60 * 1000, // Устанавливаем время жизни cookie, равное 12 часам
    });

    res.send({ token: token });
  } catch (e) {
    console.log("Error while post /login: ", e.message);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const refreshToken = (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  // console.log("refreshToken in refreshToken => ", refreshToken); // dev

  if (!refreshToken) {
    console.log("No refresh token provided");
    return res.status(401).json({ message: "Refresh token is missing" });
  }

  jwt.verify(refreshToken, REFRESH_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Invalid refresh token" });
    }

    // Создаём новый access token
    const accessToken = jwt.sign(
      { id: user.id, username: user.username },
      ACCESS_SECRET,
      { expiresIn: "15m" }
    );

    // Опционально пересоздаём refresh token
    const newRefreshToken = jwt.sign(
      { id: user.id, username: user.username },
      REFRESH_SECRET,
      { expiresIn: "12h" }
    );

    res.cookie("refreshToken", newRefreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 12 * 60 * 60 * 1000, // Устанавливаем время жизни нового refreshToken 12 часов.
    });

    res.json({ token: accessToken });
  });
};

module.exports = {
  registration,
  login,
  refreshToken,
};
