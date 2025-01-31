import { notification } from "antd";

const apiUrl = process.env.REACT_APP_API_URL;

export const deleteProduct = async (id, type) => {
  if (!id || !type) {
    console.error("Некорректные параметры: id или type отсутствуют.");
    notification.error({
      message: "Ошибка",
      description: "Некорректные параметры для удаления товара.",
      placement: "bottomRight",
    });
    return;
  }
  try {
    const accessToken = localStorage.getItem("accessToken");
    const response = await fetch(`${apiUrl}/${type}/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${accessToken}`, // Добавляем токен
      },
    });
    if (!response.ok) {
      throw new Error(`Ошибка: ${response.status}`);
    }

    const result = await response.json();
    notification.success({
      message: "Успех",
      description: "Товар удален.",
      placement: "bottomRight",
    });
    return result;
  } catch (error) {
    console.log("Ошибка при удалении: ", error);

    notification.error({
      message: "Ошибка",
      description: "Не удалось удалить товар. Попробуйте снова.",
      placement: "bottomRight",
    });
  }
};
