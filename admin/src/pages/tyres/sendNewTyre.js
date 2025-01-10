export const sendNewTyre = async (newTyre) => {
  try {
    const response = await fetch("http://localhost:3001/tyres/add_new", {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify(newTyre),
    });

    if (!response.ok) {
      throw new Error(`Ошибка: ${response.status}`);
    }

    const data = await response.json();
    console.log("Товар успешно добавлен:", data);
    return data;
  } catch (error) {
    console.error("Ошибка при добавлении товара:", error);
    throw error;
  }
};
