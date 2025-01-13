import { notification } from "antd";

export const sendNewTyre = async (formData) => {
  try {
    const response = await fetch("http://localhost:3001/tyres", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Ошибка: ${response.status}`);
    }

    const result = await response.json();
    console.log("result => ", result);
    notification.success({
      message: "Успех",
      description: "Товар успешно добавлен!",
      placement: "bottomRight",
    });
  } catch (error) {
    console.error("Ошибка при отправке данных:", error);

    notification.error({
      message: "Ошибка",
      description: "Не удалось добавить товар. Попробуйте снова.",
      placement: "bottomRight",
    });
  }
};
