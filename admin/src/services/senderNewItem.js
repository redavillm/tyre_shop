import { notification } from "antd";

const apiUrl = process.env.REACT_APP_API_URL;

export const senderNewItem = async (formData, type) => {
  try {
    const accessToken = localStorage.getItem("accessToken");
    const response = await fetch(`${apiUrl}/${type}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`, // Добавляем токен
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Ошибка: ${response.status}`);
    }

    const result = await response.json();
    notification.success({
      message: "Успех",
      description: "Товар успешно добавлен!",
      placement: "bottomRight",
    });
    return result;
  } catch (error) {
    console.error("Ошибка при отправке данных:", error);

    notification.error({
      message: "Ошибка",
      description: "Не удалось добавить товар. Попробуйте снова.",
      placement: "bottomRight",
    });
  }
};
