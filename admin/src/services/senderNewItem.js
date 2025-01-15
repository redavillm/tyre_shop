import { notification } from "antd";

export const senderNewItem = async (formData, type) => {
  try {
    const response = await fetch(`http://localhost:3001/${type}`, {
      method: "POST",
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
    console.log("result => ", result); //удалить
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
