const nodemailer = require("nodemailer");
require("dotenv").config();

const MAIL_HOST = process.env.MAIL_HOST;
const MAIL_ADDRESS = process.env.MAIL_ADDRESS;
const MAIL_PASSWORD = process.env.MAIL_PASSWORD;

// Настройка транспорта
const transporter = nodemailer.createTransport({
  host: MAIL_HOST, // Ваш SMTP-сервер
  port: 2525, //Порт SMTP шифрованый
  secure: false, // Используйте false для TLS, true для SSL (порт 465)
  auth: {
    user: MAIL_ADDRESS, //Ваш email отправителя
    pass: MAIL_PASSWORD, //Пароль
  },
});

const sendEmail = async (to, subject, text, html) => {
  try {
    await transporter.sendMail({
      from: `"TyreShop Order" <${MAIL_ADDRESS}>`, //От кого
      to, //Кому
      subject, // Тема
      text, // Текстовое содержание письма
      html, // HTML-содержание письма
    });
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

module.exports = sendEmail;
