import { notification } from "antd";

const apiUrl = process.env.REACT_APP_API_URL;

export const itemUpdater = async (formaData, type) => {
  try {
    const accessToken = localStorage.getItem("accessToken");
    const response = await fetch(`${apiUrl}/${type}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${accessToken}`, // Добавляем токен
      },
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
