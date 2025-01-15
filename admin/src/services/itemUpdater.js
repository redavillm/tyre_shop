import { notification } from "antd";

export const itemUpdater = async (formaData, type) => {
  try {
    const response = await fetch(`http://localhost:3001/${type}`, {
      method: "PUT",
      body: formaData,
    });
    if (!response.ok) {
      throw new Error(`Ошибка: ${response.status}`);
    }

    const result = await response.json();
    notification.success({
      message: "Успех",
      description: "Товар успешно обновлен!",
      placement: "bottomRight",
    });
    return result;
  } catch (error) {
    console.error("Ошибка при отправке данных:", error);

    notification.error({
      message: "Ошибка",
      description: "Не удалось обновить товар. Попробуйте снова.",
      placement: "bottomRight",
    });
  }
};
