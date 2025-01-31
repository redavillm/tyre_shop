const apiUrl = process.env.REACT_APP_API_URL;

export const register = async (userData) => {
  const response = await fetch(`${apiUrl}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    throw new Error("Registration failed");
  }

  return response.json();
};

export const login = async (credentials) => {
  const response = await fetch(`${apiUrl}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    throw new Error("Login failed");
  }

  const { token, refreshToken } = await response.json();
  localStorage.setItem("accessToken", token);
  localStorage.setItem("refreshToken", refreshToken);
};

export const logout = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
};

export const refreshAccessTokenIfNeeded = async ({ navigate }) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    try {
      const payload = JSON.parse(atob(token.split(".")[1])); // Декодируем payload JWT
      const isExpired = Date.now() >= payload.exp * 1000;

      if (!isExpired) {
        return; // Токен еще действителен, не обновляем
      }
    } catch (error) {
      console.error("Invalid token format", error);
    }
  }

  // Если токена нет или он истек, обновляем
  await refreshAccessToken({ navigate });
};

const refreshAccessToken = async ({ navigate }) => {
  const refreshToken = localStorage.getItem("refreshToken");

  if (!refreshToken) {
    console.warn("No refresh token found, redirecting to login.");
    if (window.location.pathname !== "/login") {
      logout();
      navigate("/login");
    }
    throw new Error("Refresh token is missing");
  }

  try {
    const response = await fetch(`${apiUrl}/refresh-token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Указываем тип содержимого
      },
      body: JSON.stringify({ refreshToken }), // Отправляем refreshToken в формате JSON
    });

    if (!response.ok) {
      console.error("Failed to refresh access token:", response.statusText);
      if (window.location.pathname !== "/login") {
        logout();
        navigate("/login");
      }
      throw new Error("Failed to refresh access token");
    }

    const { token: accessToken, refreshToken: newRefreshToken } =
      await response.json();
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", newRefreshToken);
    return accessToken; // Возвращаем новый accessToken
  } catch (error) {
    console.error("Error refreshing access token:", error.message);
    throw error; // Пробрасываем ошибку дальше
  }
};
