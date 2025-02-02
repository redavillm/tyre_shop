const Tyre = require("../models/Tyre");
const Disk = require("../models/Disk");
const Accumulator = require("../models/Accumulator");
require("dotenv").config();

const sendEmail = require("../services/sendEmail");

const ADMIN_EMAIL = process.env.ADMIN_EMAIL;

const getCartItems = async (req, res) => {
  const { cartItems } = req.body;

  try {
    const results = await Promise.all(
      cartItems.map(async ({ id, type }) => {
        switch (type) {
          case "tyres":
            return await Tyre.findById(id);
          case "disks":
            return await Disk.findById(id);
          case "accumulators":
            return await Accumulator.findById(id);
          default:
            return null;
        }
      })
    );
    res.status(200).json(results.filter(Boolean));
  } catch (error) {
    console.error("Error while fetching cart itmes: ", error);
    res.status(500).json({ message: "Ошибка на сервере" });
  }
};

const sendOrderData = async (req, res) => {
  const { clientName, clientEmail, clientPhoneNumber, cartProducts } = req.body;

  console.log("clientName => ", clientName);

  const adminEmail = ADMIN_EMAIL; // Почта администратора
  const clientEmailAddress = clientEmail; // Почта клиента

  const subjectForAdmin = "Новый заказ с сайта TyreShop";
  const subjectForClient = "Подтверждение заказа";

  const textForAdmin = `Новый заказ от ${clientName}. Email: ${clientEmail}, Телефон: ${clientPhoneNumber}.`;
  const textForClient = `Здравствуйте, ${clientName}! Ваш заказ был успешно принят. Мы свяжемся с вами в ближайшее время.`;

  const htmlForAdmin = ` 
    <h1>Новый заказ</h1>
    <p><strong>Имя клиента:</strong> ${clientName}</p>
    <p><strong>Email:</strong> ${clientEmail}</p>
    <p><strong>Телефон:</strong> ${clientPhoneNumber}</p>
    <table>
        <thead>
            <tr>
                <th>Бренд</th>
                <th>Модель</th>
                <th>Цена</th>
            </tr>
        </thead>
        <tbody>
            ${cartProducts
              .map(
                (item) => `
                <tr>
                    <td>${item.brand}</td>
                    <td>${item.model}</td>
                    <td>${item.price}</td>
                </tr>`
              )
              .join("")}
        </tbody>
    </table>
  `;

  const htmlForClient = ` 
    <h1>Спасибо за ваш заказ, ${clientName}!</h1>
    <p>Мы приняли ваш заказ и скоро свяжемся с вами для подтверждения и уточнения информации.</p>
    <p><strong>Email:</strong> ${clientEmail}</p>
    <p><strong>Телефон:</strong> ${clientPhoneNumber}</p>
    <table>
        <thead>
            <tr>
                <th>Бренд</th>
                <th>Модель</th>
                <th>Цена</th>
            </tr>
        </thead>
        <tbody>
            ${cartProducts
              .map(
                (item) => `
                <tr>
                    <td>${item.brand}</td>
                    <td>${item.model}</td>
                    <td>${item.price}</td>
                </tr>`
              )
              .join("")}
        </tbody>
    </table>
  `;

  try {
    // Отправляем письмо администратору
    await sendEmail(adminEmail, subjectForAdmin, textForAdmin, htmlForAdmin);

    // Отправляем письмо клиенту
    await sendEmail(
      clientEmailAddress,
      subjectForClient,
      textForClient,
      htmlForClient
    );

    res.status(200).send("Emails successfully sent");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Failed to send email");
  }
};

module.exports = {
  getCartItems,
  sendOrderData,
};
