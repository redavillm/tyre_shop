import { notification } from "antd";

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
    const response = await fetch(`http://localhost:3001/${type}/${id}`, {
      method: "DELETE",
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
